import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Providers/Global/GlobalContext";

export const MainPage = () => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const { allCurrencies } = useContext(GlobalContext);
  const allCurrencesObjects = Object.keys(allCurrencies);
  console.log(fromValue, toValue);
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className=" w-[30%] flex justify-center items-center h-[100%]   flex-col">
        <div className=" flex flex-col w-full p-6 shadow-xl shadow-red-500 border-solid">
          <div className="flex justify-between items-center mb-1">
            <div className="left">From</div>
            <div className="right">To</div>
          </div>
          <div className="inputs flex">
            <select
              className="w-full p-2  border-none outline-none"
              onChange={(e) => setFromValue(e.target.value)}
              name=""
              id=""
            >
              {allCurrencesObjects.map((currency, index) => {
                return (
                  <option key={index} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
            <select
              className="w-full p-2  ml-2 border-none outline-none"
              onChange={(e) => setToValue(e.target.value)}
              name=""
              id=""
            >
              {allCurrencesObjects.map((currency, index) => {
                return (
                  <option key={index} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            placeholder="Enter Amount"
            className="w-full  border-none mt-1 p-2 outline-none"
            type=""
          />
          <button className="mt-3 w-full border-none p-2 cursor-pointer">
            Convert
          </button>
          <h3 className="text-center mt-5">Result:</h3>
        </div>
      </div>
    </div>
  );
};
