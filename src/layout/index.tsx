import { Flex, useColorMode } from "@chakra-ui/react";
import { Feedback } from "../components/Feedback";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useColors } from "../hooks/useColors";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { colorMode } = useColorMode();
  const { colors } = useColors();

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg={colors.bg}
      color={colors.color}
      overflow="hidden"
    >
      <Flex
        w="100%"
        h="100%"
        pl={["5px", "5px", "20px"]}
        bgImage={
          colorMode === "dark"
            ? "url(/BackgroundDark.svg)"
            : "url(/BackgroundLight.svg)"
        }
        bgPosition="center"
        bgRepeat="repeat"
      >
        <Sidebar />

        <Flex flex="1" flexDir="column">
          <Header />
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
            <Feedback />
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
