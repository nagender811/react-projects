import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const paste = useSelector((state) => state.paste.pastes.find((p) => p.id === pastes._id));

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
          title: 'Check out this paste!',
          text: paste.content, // Assuming `content` is the paste text
          url: shareUrl,
        });
        console.log('Paste shared successfully');
      } catch (error) {
        console.error('Error sharing the paste:', error);
      }
    } else {
      prompt('Copy this link to share:', shareUrl);
    }
  }
  return (
    <div>
      <input
        className="p-1 px-3 mt-4 rounded-lg min-w-[500px]"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-3">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div className="border mt-4" key={paste?._id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button>
                    <NavLink to={`/?pasteId=${paste?._id}`}>
                    Edit
                    </NavLink>
                  </button>
                  <button>
                    <NavLink to={`/pastes/${paste?._id}`}>View</NavLink>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button onClick={handleShare}>Share</button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
