import { useState } from "react";

function Modal() {
  const [modal, setmodal] = useState(false);
  return (
    <div className="flex flex-col pb-56 ">
      <h1>Modal Popup</h1>
      <button
        onClick={() => {
          setmodal(true);
        }}
        className="px-5 py-2 bg-purple-500 text-white font-semibold rounded-xl"
      >
        POPUP
      </button>
      {modal ? (
        <div className="flex flex-col fixed inset-0 w-52 h-48 border-2 border-gray-400">
          <div className="bg-yellow-200 items-center flex-1">
            <p>This is the first one</p>
          </div>
          <div className="bg-orange-200 items-center text-purple-300 flex-2">
            <p>This is the second one</p>
          </div>
          <div className="bg-red-300 text-green-300 font-semibold flex-1">
            This is the 3rd one
          </div>
          <button
            onClick={() => {
              setmodal(false);
            }}
            className="bg-indigo-500 px-5 py-2 rounded-lg"
          >
            Close Popup
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
