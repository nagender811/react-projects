import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes)

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if(pasteId) {
      //update
      dispatch(updateToPastes(paste))
    }
    else {
      //create
      dispatch(addToPastes(paste))
    }

    // after Creation or updation
    setTitle('')
    setValue('')
    setSearchParams({})
  }

  useEffect(()=> {
    if(pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId)
      setTitle(paste.title)
      setValue(paste.content)
    }
  },[pasteId])

  return (
    <div>
      <div className="flex gap-4">
        <input
          className="p-2 pr-20 mt-2 mx-auto rounded-lg "
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          disabled={!title || !value}
          onClick={createPaste}
          className="p-2 px-3 mt-2 mx-auto  rounded-lg bg-blue-500"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-lg mt-4 min-w-[500px] p-4"
          value={value}
          placeholder="Enter Content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
