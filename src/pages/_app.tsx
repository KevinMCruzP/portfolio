import { ChakraProvider, Flex } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ColorsProvider, useColors } from "../hooks/useColors";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { colors } = useColors();

  return (
    <ChakraProvider theme={theme}>
      <ColorsProvider>
        <Flex flexDir="column" w="95%" marginX="auto">
          <Header />
          <Flex>
            <Sidebar />
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </ColorsProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
