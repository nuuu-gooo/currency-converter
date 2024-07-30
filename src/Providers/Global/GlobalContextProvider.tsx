import React, { PropsWithChildren } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};
