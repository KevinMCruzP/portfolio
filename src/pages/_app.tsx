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
        <Flex
          w="100vw"
          h="100vh"
          bgImage={"url(/Background.svg)"}
          bgPosition="center"
          bgRepeat="repeat"
          overflow="hidden"
        >
          <Flex flexDir="column" w="95%" marginX="auto">
            <Header />
            <Flex
              overflowY="auto"
              css={{
                "::-webkit-scrollbar": {
                  width: 12,
                },
                "::-webkit-scrollbar-track": {
                  background: "#1b113d",
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                },
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: "#0c081b",
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                },
              }}
            >
              <Sidebar />
              <Component {...pageProps} />
            </Flex>
          </Flex>
        </Flex>
      </ColorsProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
