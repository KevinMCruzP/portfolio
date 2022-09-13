import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ColorsProvider } from "../hooks/useColors";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorsProvider>
        <Component {...pageProps} />
      </ColorsProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
