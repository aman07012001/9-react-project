import { useEffect, useState } from "react";

function Loadmore({ url, limit, setlimit }) {
  const [count, setcount] = useState(0);

  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  async function getdata(url, limit, setlimit) {
    try {
      setloading(true);

      const data = await fetch(url);
      const image = await data.json();
      if (image) {
        setloading(false);
        setimages((prevstate) => [...prevstate, ...image]);
      }
    } catch (e) {
      setloading(false);
      console.log(e.message);
    }
  }

  useEffect(() => {
    getdata(url);
  }, [url]);

  return (
    <div className="w-full pb-[450px] flex flex-col ">
      <h1 className="text-6xl font-semibold mx-auto">Load More Button</h1>
      <div className="grid grid-cols-5 gap-x-4 ">
        {loading ? <h1 className="text-6xl font-semibold">...loading</h1> : ""}
        {images.map((img) => {
          return (
            <img
              src={img.download_url}
              className="border-[1px] border-blue-500"
            ></img>
          );
        })}
        <button
          onClick={() => {
            console.log("count", count);
            setcount((prevstate) => prevstate + 1);
            setlimit(count);
          }}
          className={`${count > 10 && "hidden"}`}
        >
          Load More
        </button>
        {count > 10 && (
          <h1 className="text-2xl font-semibold">Cannot Load More</h1>
        )}
        <button
          onClick={() => {
            console.log("count back", count);
            setcount((prevstate) => prevstate - 1);
            setlimit(count);
          }}
          className={`${count <= 0 && "hidden"}`}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Loadmore;
