import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import Fonts from "../config/Fonts";
import { ParallaxProvider } from "react-scroll-parallax";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "Quicksand",
    body: "Quicksand"
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}
export default MyApp;
