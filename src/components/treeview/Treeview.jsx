import { useEffect, useState } from "react";
import menus from "./Data.js";
function Treeview() {
  const [child, setchild] = useState([]);
  const [grandchild, setgrandchild] = useState([]);
  useEffect(() => {
    console.log("useeffectchild", child);
  }, [child, grandchild]);

  function checkchild(element) {
    if (element.isFolder) {
      setchild(element.children);
    }
  }

  function checkgrandchild(element) {
    if (element.isFolder) {
      console.log("checkgrandchild", element.children);
      setgrandchild(element.children);
    }
  }

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col bg-gray-100 w-full h-96">
        <button
          className="bg-blue-600 border-2 border-white py-3 px-6 w-1/3"
          onClick={() => {
            checkchild(menus);
          }}
        >
          {menus.label}
        </button>
        {child && child.length
          ? child.map((ele) => {
              return (
                <>
                  <button
                    onClick={(e) => {
                      checkgrandchild(ele);
                    }}
                    className="bg-blue-600 border-2 border-white py-3 px-6 w-1/3"
                  >
                    {ele.label}
                  </button>
                  {ele.children == grandchild && grandchild.length ? (
                    <div className="w-1/2 flex flex-col">
                      {grandchild.map((data) => {
                        return (
                          <button className=" bg-yellow-200 text-red-400 w-1/4 translate-x-52">
                            {data.label}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Treeview;
