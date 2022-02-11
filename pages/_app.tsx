import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import Fonts from "../config/Fonts";

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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
