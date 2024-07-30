import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Providers/Global/GlobalContext";
import { Button } from "antd";
import { FooterComp } from "../../Components/Footer/FooterComp";

export const MainPage = () => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const { allCurrencies, getConvertedValue, convertedValue, loading } =
    useContext(GlobalContext);
  const allCurrencesObjects = Object.keys(allCurrencies);

  const handleOnClick = async () => {
    getConvertedValue(amount, fromValue, toValue);
    setFromValue("");
    setToValue("");
    setAmount("");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className=" w-[30%] flex justify-center items-center h-[100%]   flex-col">
        <div
          className={`min-w-[390px] max-w-[400px]   flex flex-col w-full p-6 shadow-xl  ${
            loading ? " shadow-green-500" : "shadow-blue-500"
          }`}
        >
          <div className="flex justify-between items-center mb-1">
            <div className="left">From</div>
            <div className="right">To</div>
          </div>
          <div className="inputs flex">
            <select
              value={fromValue}
              className="w-full p-2  border-none outline-none shadow-md"
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
              value={toValue}
              className="w-full p-2  ml-2 border-none outline-none shadow-md "
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="w-full  border-none mt-1 p-2 outline-none"
            type=""
          />
          <Button
            loading={loading}
            onClick={handleOnClick}
            type="primary"
            className="mt-3 w-full border-none p-2 cursor-pointer shadow-md"
          >
            {loading ? "Loading" : "Convert"}
          </Button>
          <h4 className="text-center mt-5">Result: {convertedValue}</h4>
        </div>
        <FooterComp />
      </div>
    </div>
  );
};
