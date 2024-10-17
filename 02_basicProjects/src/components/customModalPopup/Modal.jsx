import React from "react";

function Modal({ id, header, body, footer, onClose }) {
  return (
    <div
      id={id || "Modal"}
      className="modal fixed z-10 p-[150px] left-0 top-0 w-screen overflow-auto bg-[#baf005]"
    >
      <div className=".modal-content relative bg-[#fefefe] m-auto p-0 animate-modal-in border border-red-600 w-[80%]">
        <div className="header px-1 py-0 my-0 bg-[#5cb85c] text-white">
          <span
            onClick={onClose}
            className="close-model-icon cursor-pointer text-4xl font-bold float-right p-0 my-0"
          >
            &times;
          </span>
          <h2 className="text-center font-bold text-[40px] py-4">
            {header ? header : "Header"}
          </h2>
        </div>
        <div className="body px-0.5 py-4 h-[200px] text-center">
          {body ? body : <div> This is Our Model</div>}
        </div>
        <div className="footer px-0.5 py-4 bg-[#5cb85c] text-white text-center">
          {footer ? footer : <h2>Footer</h2>}
        </div>
      </div>
    </div>
  );
}

export default Modal;
