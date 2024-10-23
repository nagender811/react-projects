import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import copy from '../assets/paste 1.png'
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    // after Creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  return (
    <div>
      <div className="flex gap-1 lg:w-[60%] mx-auto">
        <input
          className="px-4 mt-2 mx-auto rounded-lg border border-[#4B5563] bg-[#27272A] w-[75%] text-white"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          disabled={!title || !value}
          onClick={createPaste}
          className="p-2 px-3 mt-2 mx-auto  rounded-lg bg-[#6674CC] text-white"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div className="mt-4 border border-[#4B5563] sm-[80%] md:w-[60%] mx-auto rounded-lg ">
        <div className="flex justify-between">
          <div className="flex gap-2 m-2 mx-4">
            <div className="w-4 h-4 rounded-full bg-[#FF5F57]"></div>
            <div className="w-4 h-4 rounded-full bg-[#FEBC2E]"></div>
            <div className="w-4 h-4 rounded-full bg-[#2DC842]"></div>
          </div>
          <button onClick={()=> {
            navigator.clipboard.writeText(value);
            toast.success("Copied to Clipboard", {position: "top-right"})
          }}>
            <img src={copy} alt="copy" className="w-7 h-7 mr-3"/>
          </button>
        </div>
        <textarea
          className="rounded-lg mt-1 w-[98%] p-4 bg-[#27272A] border border-[#4B5563] focus-visible:ring-0 text-white"
          value={value}
          placeholder="Write Your Content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
