import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== 0) fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occured ! {errorMsg}</div>;
  }

  return (
    <div className="flex flex-col max-w-screen h-screen justify-center items-center gap-6 bg-gray-400">
      <h2 className="text-4xl text-white font-bold">Image Slider</h2>
      <div className="relative flex justify-center items-center w-[600px] h-[450px] shadow-customShadow rounded">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 text-white drop-shadow-md left-4"
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "rounded-lg shadow-md w-full h-full"
                    : "rounded-lg shadow-md w-full h-full hidden"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 text-white drop-shadow-md right-4"
        />
        <span className="flex absolute bottom-2">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "bg-white h-[15px] w-[15px] rounded-full mx-1 cursor-pointer"
                      : "bg-gray-500 h-[15px] w-[15px] rounded-full mx-1 hover:cursor"
                  }
                  onClick={()=> (setCurrentSlide(index))}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
}

export default ImageSlider;
