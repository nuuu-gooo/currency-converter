import React, { PropsWithChildren } from "react";
import { GlobalContextProvider } from "./Global/GlobalContextProvider";
import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </BrowserRouter>
  );
};
