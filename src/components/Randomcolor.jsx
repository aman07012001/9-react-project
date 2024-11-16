import { useState } from "react";
import { useRef } from "react";

function Randomcolor() {
  const colored = useRef(null);
  const [heading, setheading] = useState("white");
  const [click, setclick] = useState("hex");

  function hexcolor() {
    let a = Math.floor(Math.random() * 9);
    let b = Math.floor(Math.random() * 9);
    let c = Math.floor(Math.random() * 9);
    let d = Math.floor(Math.random() * 9);
    let e = Math.floor(Math.random() * 9);
    let f = Math.floor(Math.random() * 9);
    let data = `#${a}${b}${c}${d}${e}${f}`;
    colored.current.style.backgroundColor = data;
    setheading(data);
  }
  function rgbcolor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let data = `rgb(${r}, ${g},${b})`;
    colored.current.style.backgroundColor = data;
    setheading(data);
  }

  return (
    <div className={`w-full  flex flex-col gap-y-10 place-items-center `}>
      <h1 className="text-6xl text-black font-semibold">
        {" "}
        Random Color Generator
      </h1>
      <button
        onClick={() => {
          setclick("hex");
        }}
        className="bg-gray-300 w-fit py-4 px-8 rounded-lg"
      >
        hex color
      </button>
      <button
        onClick={() => {
          setclick("rgb");
        }}
        className="bg-gray-300 w-fit py-4 px-8 rounded-lg"
      >
        Rgb Color
      </button>
      <button
        className="bg-gray-300 w-fit py-4 px-8 rounded-lg"
        onClick={() => {
          if (click == "hex") {
            hexcolor();
          } else {
            rgbcolor();
          }
        }}
      >
        Generate Color
      </button>

      <div
        ref={colored}
        className="w-full h-44 border-2 place-content-center place-items-center border-black"
      >
        <h1 className="text-6xl font-semibold text-white ">{heading}</h1>
      </div>
    </div>
  );
}
export default Randomcolor;
