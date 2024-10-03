import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function RatingStar({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    // console.log(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    // console.log(rating);
    setHover(rating);
  }
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold text-white">Rate this Project</h2>
      <div className="flex items-center justify-center">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={
                index <= (hover || rating) ? "text-yellow-500" : "text-gray-500"
              }
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RatingStar;
