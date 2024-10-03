import React from "react";
import { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  console.log(selected);

  function handleMultiselected(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="w-1/2 h-1/3 flex flex-col items-center">
      <button
        onClick={() => setEnableMultiSelected(!enableMultiSelected)}
        className=" font-semibold my-3 text-white p-2 bg-[#010408] border rounded opacity-90"
      >
        {enableMultiSelected ? <p>Click to Disable Multiselection</p>: <p>Click to Enable Multiselection</p>}
      </button>
      <div className="flex flex-col gap-">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="">
              <div
                onClick={
                  enableMultiSelected
                    ? () => handleMultiselected(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex gap-5 bg-[#141010] bg-opacity-50 px-4 py-2 justify-between font-bold text-white text-2xl"
              >
                <h3>{dataItem.question}</h3>
                {enableMultiSelected ? (
                  multiple.includes(dataItem.id) ? (
                    <span>-</span>
                  ) : (
                    <span>+</span>
                  )
                ) : selected === dataItem.id ? (
                  <span>-</span>
                ) : (
                  <span>+</span>
                )}
              </div>
              {enableMultiSelected
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="bg-[#141010] opacity-90 px-4 text-white font-semibold">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="bg-[#141010] opacity-90 px-4 text-white font-semibold ">
                      {dataItem.answer}{" "}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Present</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
