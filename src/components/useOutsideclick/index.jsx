import { useEffect, useRef, useState } from "react";
import useOutsideClick from "./useOutsideclick";

function TestuseOutsideClick() {
  const [limit, setlimit] = useState(0);
  const [showcontent, setshowcontent] = useState(false);
  const ref=useRef(null)
  
    useOutsideClick(ref,(value)=>{setshowcontent(value)})
 
 
  
  return (
    <div className="flex flex-col min-h-screen place-items-center justify-center gap-y-5">
        <h1 className="text-4xl font-semibold">UseOutsideClick Demo</h1>
      <div>
        {!showcontent && (
          <button onClick={()=>{setshowcontent(true)}} className="px-5 py-3 bg-gray-300">Show More Content</button>
        )}
        {showcontent && (
          <div id="1" ref={ref} className="flex flex-col gap-y-4">
            <h1 className="font-semibold text-2xl">
              This is The extra content
            </h1>

            <p>
              This is how u use outside click in this game man.dang dang dang
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestuseOutsideClick;
