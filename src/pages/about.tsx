import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useColors } from "../hooks/useColors";

export default function About() {
  const { colors } = useColors();

  return (
    <Grid
      flex="1"
      templateColumns="1fr"
      templateRows="repeat(3, 1fr)"
      gap={2}
      color={colors.color}
    >
      <GridItem display="flex" flexDir="column" alignItems="center" gap={2}>
        <Image
          alt="Profile Image"
          src="/profile2.png"
          height="300px"
          width="250px"
          layout="fixed"
        />

        <Text fontSize={["md", "lg", "lg", "lg", "2xl"]} fontWeight="medium">
          🐱‍💻 Hi, I am Kevin, nice to see you!
        </Text>
      </GridItem>

      <GridItem flex="1" display="flex" justifyContent="center" pb={20}>
        <Flex
          maxW={["95%", "95%", "80%"]}
          flexDir="column"
          gap={2}
          fontSize={["xs", "sm", "sm", "sm", "md"]}
        >
          <Text textAlign="center">
            Welcome to my page! I am Kevin Cruz, Fullstack developer from
            Carambeí, Brasil, currently living in La Serena, Chile.
          </Text>

          <Text mt={5} fontWeight="medium">
            About me:
          </Text>

          <Flex flexDir="column">
            <li>🐱 Student and developer front end & back end.</li>
            <li>
              🌱 I’m currently studying a computer engineer at Inacap
              university, Chile.
            </li>
            <li>
              💬 I’m currently learning NodeJS, NextJS, MySQL, english...🤣
            </li>
            <li>🚀 I love innovation and new technologies. </li>
            <li>🤔 I’m looking to make content in Youtube. </li>
            <li>
              💡 I Speak in Brazilian Portuguese, Spanish and intermediate
              English.
            </li>
            <li>👻 Fun fact: I worked as a fisherman and woodwork.</li>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem flex="1" display="flex" justifyContent="center" pb={20}>
        <Flex
          maxW={["95%", "95%", "80%"]}
          flexDir="column"
          gap={2}
          fontSize={["xs", "sm", "sm", "sm", "md"]}
        >
          <Text fontWeight="medium">My main tools are:</Text>

          <Flex flexDir="column">
            <Text textAlign="center">
              HTML5 | CSS3 | JavaScript | TypeScript | React | NextJS | React
              Native | Node | APIs Rest | Linux | Git
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}

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
