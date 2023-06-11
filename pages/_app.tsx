import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store/reducer/reducer";

import Layout from "@/components/_App/Layout";
import { UseWalletProvider } from "use-wallet";

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <UseWalletProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UseWalletProvider>
  );
}
