import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import edit from "../assets/edit.png";
import copy from "../assets/copy1.png";
import view from "../assets/view.png";
import bin from "../assets/deleteBlack.png";
import share from "../assets/share.png";
import calendar from "../assets/calendar.png";
import search from "../assets/search.png"
const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const paste = useSelector((state) =>
    state.paste.pastes.find((p) => p.id === pastes._id)
  );

  const shareUrl = `${window.location.origin}/?paste=${paste?._id}`;

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this paste!",
          text: paste.content, // Assuming `content` is the paste text
          url: shareUrl,
        });
        console.log("Paste shared successfully");
      } catch (error) {
        console.error("Error sharing the paste:", error);
      }
    } else {
      prompt("Copy this link to share:", shareUrl);
    }
  };
  return (
    <div>
      <div className="relative min-w-[60%]">
            <input
                className="p-1 px-10 mt-4 rounded-lg lg:w-[60%] sm:w-full  border border-[#4B5563] bg-[#27272A] text-white"
                type="search"
                placeholder="Search title here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={search} className="absolute lg:left-[250px] sm:left-3 top-[67%] transform -translate-y-[50%] text-gray-400 w-5" />
        </div>
      <div className="flex flex-col gap-3 border border-[#4B5563] m-5 p-5 lg:w-[60%] mx-auto rounded-lg">
        <h1 className="text-3xl font-bold text-white">All Pastes</h1>
        <div className=" border border-[#4B5563]"></div>
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div
                className="flex border bg-[#000000] border-[#4B5563] justify-between mt-4 pl-5 rounded-lg lg:w-[100%] md: w-[100%] mx-auto text-white"
                key={paste?._id}
              >
                <div className="mt-4 flex flex-col text-left">
                  <div className="text-3xl font-bold p-2 ">{paste.title}</div>
                  <div className="truncate h-8 w-[260px] pl-2 ">
                    {paste.content}
                  </div>
                </div>

                <div>
                  <div className="flex flex-row gap-2 mt-4 mr-2">
                    <button className="p-1 bg-white rounded-lg">
                      <NavLink to={`/?pasteId=${paste?._id}`}>
                        <img className="w-6" src={edit} alt="Edit" />
                      </NavLink>
                    </button>
                    <button className="p-1 bg-white rounded-lg">
                      <NavLink to={`/pastes/${paste?._id}`}>
                        <img className="w-6" src={view} alt="View" />
                      </NavLink>
                    </button>
                    <button
                      className="p-1 bg-white rounded-lg"
                      onClick={() => handleDelete(paste?._id)}
                    >
                      <img className="w-6" src={bin} alt="delete" />
                    </button>
                    <button
                      className="p-1 bg-white rounded-lg"
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("copied to clipboard");
                      }}
                    >
                      <img className="w-6" src={copy} alt="copy" />
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-1 bg-white rounded-lg"
                    >
                      <img className="w-6 " src={share} alt="share" />
                    </button>
                  </div>
                  <div>
                    <div className="flex gap-2 my-4 mr-4">
                      <img className="w-7 bg-white p-1 rounded-lg" src={calendar} alt="date" />
                      <p className="font-semibold">{paste.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
