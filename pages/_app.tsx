import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PopupContext, Popup } from "../store/Context";
import Layout from "@/components/_App/Layout";
import { UseWalletProvider } from "use-wallet";

export default function App({ Component, pageProps }: AppProps) {
  const [popup, setPopup] = React.useState(Popup.Open);
  return (
    <UseWalletProvider>
      <PopupContext.Provider value={{ popup, setPopup }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PopupContext.Provider>
    </UseWalletProvider>
  );
}
