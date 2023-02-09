import React from "react";
import Head from "next/head";
import "../styles/globals.css";
// import Header from "../components/Header";


export default function MyApp({ Component, pageProps, title, description }) {
  return (
    <div>
      <Head>
      <title>{title}</title>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
    
      <Component {...pageProps} />
    </div>
  );
} 
