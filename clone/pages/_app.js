import "../styles/globals.css";
import { useMediaQuery } from "react-responsive";

function MyApp({ Component, pageProps }) {
  const isMobileSize = useMediaQuery({ maxWidth: 767 });
  return <Component {...pageProps} />;
}

export default MyApp;
