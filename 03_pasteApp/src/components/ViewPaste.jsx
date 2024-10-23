import React from "react";
import { useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import copy from '../assets/paste 1.png'
import toast from "react-hot-toast";


const ViewPaste = () => {
  const {id} = useParams()
  const Pastes = useSelector((state) => state.paste.pastes)
  const paste = Pastes.filter((p) => p._id === id)[0]
  console.log("Final Paste:", paste);
  
  return (
    <div>
      <div className="flex gap-1 lg:w-[60%] mx-auto">
        <input
          className="px-4 p-1 mt-2 mx-auto rounded-lg border border-[#4B5563] bg-[#27272A] w-[90%] text-white"
          type="text"
          placeholder="Enter title here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />

       
      </div>
      <div className="mt-4 border border-[#27272A] sm-[80%] md:w-[60%] mx-auto rounded-lg ">
      <div className="flex justify-between">
          <div className="flex gap-2 m-2 mx-4">
            <div className="w-4 h-4 rounded-full bg-[#FF5F57]"></div>
            <div className="w-4 h-4 rounded-full bg-[#FEBC2E]"></div>
            <div className="w-4 h-4 rounded-full bg-[#2DC842]"></div>
          </div>
          <button onClick={()=> {
            navigator.clipboard.writeText(paste.content);
            toast.success("Copied to Clipboard", {position: "top-right"})
          }}>
            <img src={copy} alt="copy" className="w-8 mr-3 p-1"/>
          </button>
        </div>
        <textarea
          className="rounded-lg mt-1 w-[98%] p-4 bg-[#27272A] border border-[#27272A]  focus-visible:ring-0 text-white"
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