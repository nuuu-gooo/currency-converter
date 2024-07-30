import React, { PropsWithChildren, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { publicAxios } from "../../utils/API/publicAxios";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [allCurrencies, setAllCurrencies] = useState<string[]>([]);
  const [convertedValue, setCovertedValue] = useState<string>("");
  const getALlCurrencies = async () => {
    const resp = await publicAxios.get("/currencies");
    setAllCurrencies(resp.data);
  };

  useEffect(() => {
    getALlCurrencies();
  }, []);

  const getConvertedValue = async (
    amount: string,
    from: string,
    to: string
  ) => {
    const resp = await publicAxios.post(
      `/amount=${amount}&from=${from}&to=${to}`
    );

    console.log(resp.data);
  };

  return (
    <GlobalContext.Provider
      value={{
        allCurrencies,
        setAllCurrencies,
        getConvertedValue,
        convertedValue,
        setCovertedValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
