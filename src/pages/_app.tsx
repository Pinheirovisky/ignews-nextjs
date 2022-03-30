import { AppProps } from "next/app";

// styles:
import "../styles/global.scss";
import { Header } from "./Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
