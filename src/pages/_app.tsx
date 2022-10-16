import { ChakraProvider, Flex } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { CommandBar } from "../hooks/CommandBar";
import { ColorsProvider } from "../hooks/useColors";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <ColorsProvider>
        <CommandBar>
          <Flex
            w="100vw"
            h="100vh"
            pl={["5px", "5px", "20px"]}
            bgImage={"url(/Background.svg)"}
            bgPosition="center"
            bgRepeat="repeat"
            overflow="hidden"
          >
            {router.pathname === "/" && <Sidebar />}
            {router.pathname === "/about" && <Sidebar />}
            {router.pathname === "/projects" && <Sidebar />}

            <Flex flex="1" flexDir="column">
              {router.pathname === "/" && <Header />}
              {router.pathname === "/about" && <Header />}
              {router.pathname === "/projects" && <Header />}

              <Flex
                flex="1"
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
                <Component {...pageProps} />
              </Flex>
            </Flex>
          </Flex>
        </CommandBar>
      </ColorsProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
