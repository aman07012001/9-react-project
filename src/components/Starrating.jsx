import { useContext, useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { ThemeContext } from "./ThemeProvider";
function Starrating() {
  const [rating, setrating] = useState(0);

  function handleclick(newid) {
    console.log(newid);
    setrating(newid);
    console.log(rating);
  }

const a=useContext(ThemeContext)
console.log(a)

  return (
    <div className="flex flex-col pt-32 w-full pb-60 place-items-center gap-y-20">
      <h1 className="text-6xl font-semibold">Star Rating</h1>
      <div className="flex w-fit px-3">
        {[...Array(7)].map((_, index) => {
          index += 1;
          return (
            <CiStar
              onClick={(e) => {
                handleclick(e.target.id);
              }}
              key={index}
              id={index}
              className={`text-4xl hover:text-[#FFD700] ${
                index <= rating ? "text-[#FFD700]" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Starrating;

/* <CiStar id={5} className="text-4xl hover:text-[#FFD700]" /> */
