import React, { useState, useEffect } from "react";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMessage) {
    return <div>Error | {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading Data | Please Wait</div>;
  }

  return (
    <div className="bg-gray-500">
      <div className="top-Container fixed top-0 z-10 w-screen text-center bg-[#075b0a] text-[#fff]">
        <h1 className="text-2xl py-2 text-white ">Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container w-full h-2 bg-[#aaf900]">
          <div
            className="current-progress-bar h-2 w-0 bg-[#8b02b5]"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container text-center  pt-[70px]">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicator;
