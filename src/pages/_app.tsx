import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CommandBar } from "../hooks/CommandBar";
import { ColorsProvider } from "../hooks/useColors";
import { Layout } from "../layout";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ChakraProvider theme={theme}>
        <ColorsProvider>
          <CommandBar>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CommandBar>
        </ColorsProvider>
      </ChakraProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
