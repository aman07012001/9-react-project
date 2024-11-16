import { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setselected] = useState(null);
  const [enable, setenable] = useState(false);
  const [check, setcheck] = useState([]);
  function handleselection(id) {
    setselected(id === selected ? null : id);
  }
  function handlemultipleselection(id) {
    let data = [...check];
    let index = data.indexOf(id);
    if (index == -1) {
      data.push(id);
    } else {
      data.splice(index, 1);
    }
    setcheck(data);
  }
  return (
    <div className="flex flex-col min-h-screen min-w-full place-items-center">
      <button
        onClick={() => {
          setenable(true);
        }}
        className="bg-yellow-200 text-red-500 mb-10 rounded-lg px-3 py-3"
      >
        Enable Multiple Selection
      </button>
      <div id="wrapper" className="flex flex-col gap-y-4">
        {data.map((ele) => {
          return (
            <dd
              key={ele.id}
              onClick={() => {
                {
                  enable
                    ? handlemultipleselection(ele.id)
                    : handleselection(ele.id);
                }
              }}
              id={ele.id}
              className="flex flex-col w-fit justify-center py-7 bg-slate-200"
            >
              <div className="flex justify-between place-items-center">
                <h1 className="text-xl">{ele.question}</h1>
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" />
                </svg>
              </div>
              {selected === ele.id || check.indexOf(ele.id) !== -1 ? (
                <div className={`text-black `}>{ele.answer} </div>
              ) : null}
            </dd>
          );
        })}
      </div>
    </div>
  );
}

export default Accordian;
