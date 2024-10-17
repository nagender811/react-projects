import React, { useState } from "react";

function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnclick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="p-2">
      <div className="flex justify-center mb-3">
        {tabsContent.map((tabItem, index) => (
          <div
            className={
              currentTabIndex === index
                ? "inline-flex text-3xl font-bold text-center px-2 py-4 cursor-pointer border border-none text-white bg-[#4e016a]"
                : "inline-flex text-3xl font-bold text-center px-2 py-4 cursor-pointer border border-none border-white bg-[#a1d600] text-white"
            }
            onClick={() => handleOnclick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div
        className="px-5 py-2.5 h-[300px] overflow-auto bg-white font-semibold text-2xl text-center"
        style={{ color: "red" }}
      >
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
