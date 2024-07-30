import React, { PropsWithChildren, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { publicAxios } from "../../utils/API/publicAxios";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [allCurrencies, setAllCurrencies] = useState<string[]>([]);
  const [convertedValue, setCovertedValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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
    try {
      setLoading(true);
      const resp = await publicAxios.post(
        `latest?amount=${amount}&from=${from}&to=${to}`
      );

      setCovertedValue(resp.data.rates[to] + to);
      setTimeout(() => {
        setCovertedValue("");
      }, 10000);
    } catch (error: any) {
      alert(error.message);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        allCurrencies,
        setAllCurrencies,
        getConvertedValue,
        convertedValue,
        setCovertedValue,
        setLoading,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
