import { useState } from "react";
import QRCode from "react-qr-code";

function GenerateQrcode() {
  const [input, setinput] = useState("");
  return (
    <div className="flex flex-col w-full h-[500px] justify-center place-items-center gap-y-5">
      <h1 className="text-6xl font-semibold">QR Code Generator</h1>
      <input
        className="border-2 border-purple-500"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        type="text"
        value={input}
        placeholder="generate QR Code"
      ></input>
      <div>
        <QRCode value={input} size={300} bg-color="white" />
      </div>
    </div>
  );
}

export default GenerateQrcode;
