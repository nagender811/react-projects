import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


const ViewPaste = () => {
  const {id} = useParams()
  const allPastes = useSelector((state) => state.paste.pastes)
  const paste = allPastes.filter((p) => p._id === id)[0]
  console.log("Final Paste:", paste);
  
  return (
    <div>
      <div className="flex gap-4">
        <input
          className="p-2 pr-20 mt-2 mx-auto rounded-lg "
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

       
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-lg mt-4 min-w-[500px] p-4"
          value={paste.content}
          placeholder="Enter Content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
}

export default ViewPaste