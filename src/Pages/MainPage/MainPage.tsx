import React from "react";

export const MainPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="border-solid w-[30%] flex justify-center items-center h-[100%]  shadow-xl shadow-red-500 flex-col">
        <div className=" flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <div className="left">From</div>
            <div className="right">To</div>
          </div>
          <div className="inputs flex">
            <input
              className="w-full  border-none outline-none p-2 "
              type="text"
              placeholder="From"
            />
            <input
              type="text"
              placeholder="To"
              className="w-full p-2 ml-2  border-none outline-none"
            />
          </div>
          <input
            placeholder="Enter Number"
            className="w-full  border-none mt-1 p-2 outline-none"
            type=""
          />
          <button className="mt-3 w-full border-none p-2">Convert</button>
          <h3 className="text-center mt-5">Result:</h3>
        </div>
      </div>
    </div>
  );
};
