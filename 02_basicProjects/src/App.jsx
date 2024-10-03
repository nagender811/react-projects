import { useState } from "react";
import RandomBgColorGen from "./components/randomBgColor/RandomBgColorGen";
import RatingStar from "./components/ratingStar/RatingStar";
import ImageSlider from "./components/imageSlider/ImageSlider";
import LoadMoreData from "./components/loadMoreData/LoadMoreData";
import TreeView from "./components/treeView/TreeView";
import { menus } from "./components/treeView/data";
import QRCodeGen from "./components/qrCodeGen/QRCodeGen";
import ThemeSwitcher from "./components/themeSwitcher/ThemeSwitcher";
import ScrollIndicator from "./components/scrollIndicator/ScrollIndicator";
import TabTest from "./components/customTabs/TabTest";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <RandomBgColorGen /> */}
      {/* <RatingStar /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus = {menus}/> */}
      {/* <QRCodeGen /> */}
      {/* <ThemeSwitcher /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      <TabTest />
    </div>
  );
}

export default App;
