import React, { useState, useEffect } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading Data ! Please Wait.</div>;
  }

  return (
    // Load More Container
    <div className=" bg-gray-400 flex-col gap-20 items-center justify-center">
      <h2 className="text-3xl text-center font-bold p-4">Our Products</h2>
      {/* Product Container */}
      <div className="grid grid-cols-4 gap-10">
        {products && products.length
          ? products.map((item) => (
              // Item Container
              <div
                key={item.id}
                className="p-4 mx-4 border border-1 border-solid shadow-customShadow bg-slate-300"
              >
                <img src={item.thumbnail} alt={item.id} />
                <p className="font-bold text-center">{item.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="flex flex-col items-center justify-center pb-4">
        {disableButton ? (
          <p className="font-semibold p-3 text-2xl">No more products!</p>
        ) : (
          // button Container
          <button
            className="border border-solid shadow p-[6px] mt-3 bg-black text-white font-semibold"
            disabled={disableButton}
            onClick={() => setCount(count + 1)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
