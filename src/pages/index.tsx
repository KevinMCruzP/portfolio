import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Header } from "../components/Header";
import { useColors } from "../hooks/useColors";

const Home: NextPage = () => {
  const { colors } = useColors();
  return (
    <Flex width={"100vw"} height={"100vh"} bg={colors.bg}>
      <Header />
    </Flex>
  );
};

export default Home;
