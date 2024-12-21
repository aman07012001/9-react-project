import { data } from "autoprefixer";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function ImageSlider({ url }) {
  
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const [errormsg, seterrormsg] = useState("");
  const [choose, setchoose] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    async function imagesdata(url) {
      console.log(url);
      try {
        setloading(true);
        const data = await fetch(url);
        const image = await data.json();
        const realdata = image.map((img) => img.download_url);
        if (image) {
          setloading(false);
          setimages(realdata);
        }
      } catch (e) {
        setloading(false);
        console.log(e.message);
        seterrormsg(e.message);
      }
    }
    imagesdata(url);
  }, [url]);

  return (
    <div className="w-full flex flex-col place-items-center justify-center pb-44 gap-y-10">
      <h1 className="text-6xl font-semibold">Image Slider</h1>

      <div className="flex flex-row w-80">
        <button>
          <FaAngleLeft
            onClick={() => {
              prevSlide();
            }}
            className="text-5xl"
          />
        </button>
        <div className="w-60 overflow-hidden">
          <div className={`flex flex-row w-fit gap-x-2 `}>
            {" "}
            {errormsg && <p>{errormsg}</p>}
            {loading ? (
              <p>loading...</p>
            ) : (
              <img
                key={1}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
              />
            )}
          </div>
        </div>

        <button>
          <FaAngleRight
            onClick={() => {
              nextSlide();
            }}
            className="text-5xl"
          />
        </button>
      </div>
      <div className="flex flex-row gap-x-3">
        {images.map((_, index) => {
          {
            (" ");
          }
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 bg-gray-200 rounded-full hover:bg-gray-400 ${
                currentIndex == index && "bg-gray-400"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;

//  /* {images && images.length
//         ? images.map((img, index) => {
//             <button
//               key={index}
//               className="w-3 h-3 bg-gray-500 rounded-full"
//             ></button>;
//           })
//         : console.log(images)
