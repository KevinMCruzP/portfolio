import {
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { Icons } from "../assets/Icons";
import { useColors } from "../hooks/useColors";

export default function About() {
  const { colors } = useColors();

  return (
    <Grid
      flex="1"
      templateColumns="1fr"
      templateRows="repeat(2, 1fr)"
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
              🌱 I’m currently studying computer engineer at Inacap university,
              Chile.
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

          <Text fontWeight="medium">My main tools are:</Text>

          <SimpleGrid
            color={colors.color}
            minChildWidth="25px"
            maxW={["95%", "95%", "70%", "70%"]}
            gap={2}
          >
            <Tooltip
              label="JavaScript"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.JavaScript color="#EFD81D" size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="TypeScript"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Typescript color="#2F74C0" size="25px" />}</Flex>
            </Tooltip>

            <Tooltip
              label="ReactJS"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.React color="#61DAFB" size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="NextJS"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Nextjs size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="NodeJS"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Nodejs color="#6EA560" size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="Linux"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Linux size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="Git"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Git color="#E84E31" size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="HTML5"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Html5 color="#F16524" size="25px" />}</Flex>
            </Tooltip>
            <Tooltip
              label="CSS3"
              placement="top"
              color={colors.color}
              bg="#29214e"
              border="1px solid #7928CA"
            >
              <Flex>{<Icons.Css3 color="#00A2D6" size="25px" />}</Flex>
            </Tooltip>
          </SimpleGrid>
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
