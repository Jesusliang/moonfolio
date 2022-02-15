import {
  Box,
  ChakraProvider,
  extendTheme,
  ThemeConfig
} from "@chakra-ui/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../i18n";
import { Suspense } from "react";

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
    <Suspense fallback="">
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ChakraProvider>
    </Suspense>
  );
}
export default MyApp;
