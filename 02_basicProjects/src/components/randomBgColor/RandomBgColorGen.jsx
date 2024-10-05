import React, { useState, useEffect, useRef } from "react";

function RandomBgColorGen() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [textCopy, setTextCopy] = useState("");
  const copyRef = useRef(null);

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    typeOfColor === "rgb"
      ? handleRandomRgbColor()
      : handleCreateRandomHexColor();
  }, [typeOfColor]);

  function handleCopyToClipboard() {
    const colorText = copyRef.current.innerText; // Get the color text
    navigator.clipboard
      .writeText(colorText) // Copy to clipboard
      .then(() => {
        alert(`Color code "${colorText}" copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }

  return (
    <div
      className="w-screen h-screen flex justify-center p-5"
      style={{ backgroundColor: color }}
    >
      <div>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="border text-white bg-slate-600 p-2 mx-2 rounded"
        >
          Create hex Color
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="border text-white bg-slate-600 p-2 mx-4 rounded"
        >
          Create RGB Color
        </button>
        <button
          onClick={() =>
            typeOfColor === "hex"
              ? handleCreateRandomHexColor()
              : handleRandomRgbColor()
          }
          className="border text-white bg-slate-600 p-2 mx-2 rounded"
        >
          Generate Random Color
        </button>
        <div
          onClick={() => {
            handleCopyToClipboard();
          }}
          className="text-3xl font-semibold flex items-center justify-center my-8 gap-3"
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color:" : "HEX Color:"}</h3>
          <h1 ref={copyRef}>{color}</h1>
        </div>
      </div>
    </div>
  );
}

export default RandomBgColorGen;
