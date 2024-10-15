import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="mt-0 mb-0 mx-4 flex flex-col gap-4 text-2xl">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
