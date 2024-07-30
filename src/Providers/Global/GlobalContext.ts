import React, { createContext } from "react";

interface TGLobalContext {
  setAllCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  allCurrencies: string[];
  convertedValue: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCovertedValue: React.Dispatch<React.SetStateAction<string>>;
  getConvertedValue: (
    amount: string,
    from: string,
    to: string
  ) => Promise<void>;
}

export const GlobalContext = createContext<TGLobalContext>({
  allCurrencies: [],
  convertedValue: "",
  loading: true,
  setAllCurrencies: () => {},
  setCovertedValue: () => {},
  getConvertedValue: async () => {},
  setLoading: () => {},
});
