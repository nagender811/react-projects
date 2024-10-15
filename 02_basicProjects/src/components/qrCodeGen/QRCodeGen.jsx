import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRCodeGen() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="flex flex-col gap-5 bg-gray-500 items-center h-screen">
      <h1 className="text-3xl font-bold">QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          className="mx-2 border border-solid border-black rounded px-2"
        />
        <span className="bg-white border border-solid border-black rounded ">
          <button
            onClick={handleGenerateQrCode}
            className="font-semibold px-2"
            disabled={input && input.trim() !== "" ? false : true}
          >
            Generate
          </button>
        </span>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={350} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QRCodeGen;
