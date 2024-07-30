import { createContext } from "react";

interface TGLobalContext {
  setAllCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  allCurrencies: string[];
  convertedValue: string;
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
  setAllCurrencies: () => {},
  getConvertedValue: async () => {},
  setCovertedValue: () => {},
});
