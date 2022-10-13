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
      templateRows="(1fr, 1fr)"
      gap={2}
      bg={colors.bg}
      bgImage="url('/Background.svg')"
      bgPosition="center"
      bgRepeat="repeat"
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
          Hi, I am Kevin, nice to meet you!
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
            I am 25 years old and I have been married for 5 years. I was born in
            Chile, but currently I live in Londrina, Paraná, Brazil. My
            objetives to 2022 is learn speak English and meet developers of
            other countries.
          </Text>

          <Text textAlign="center">
            I have a license in Computer Engineer and currently working as a
            Systems Analyst from Aceno Tecnologia.
          </Text>

          <Text mt={5} fontWeight="medium">
            My main functions are:
          </Text>

          <Flex flexDir="column">
            <li>Assist in the specification and documentation of systems</li>
            <li>Assist in defining tools and technologies</li>
            <li>
              Assist in defining the APIs of the platform under development
            </li>
            <li>
              Elaboration of the visual design of web systems and mobile
              applications (Android and iOS)
            </li>
            <li>Front-end development of web systems</li>
            <li>Mobile application development for Android and iOS</li>
            <li>Systems testing and validation</li>
            <li>
              Work cooperatively with the other members of the company is
              technical and development team
            </li>
          </Flex>

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
