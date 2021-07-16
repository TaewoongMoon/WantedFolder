import "../styles/globals.css";
import { useMediaQuery } from "react-responsive";
import { createContext } from "react";

export const GlobalContext = createContext({
  isMobileSize: Boolean,
  isMobileMiddleSize: Boolean,
});

function MyApp({ Component, pageProps }) {
  const isMobileSize = useMediaQuery({ maxWidth: 767 });
  const isMobileMiddleSize = useMediaQuery({ minWidth: 768, maxWidth: 974 });
  return (
    <GlobalContext.Provider value={{ isMobileSize, isMobileMiddleSize }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
