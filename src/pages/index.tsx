import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { useColors } from "../hooks/useColors";

const Home: NextPage = () => {
  const { colors } = useColors();

  const { t } = useTranslation();

  return (
    <Flex flexDir="column" w="100%" color={colors.color}>
      <Flex
        width="95%"
        height="100vh"
        bg={colors.bg}
        flexDir="column"
        marginLeft="auto"
        marginRight="auto"
      >
        <Header />
        <Main />
      </Flex>
      <Flex width="100%" height="100vh" bg="white"></Flex>
      <Flex width="100%" height="100vh" bg="red"></Flex>
    </Flex>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(String(ctx.locale), [
        "common",
        "header",
      ])),
    },
  };
};
