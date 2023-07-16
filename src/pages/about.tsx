import {
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Profile2 from "../../public/profile2.png";
import { Icons } from "../assets/Icons";
import { Tooltip } from "../components/Tooltip";
import { useColors } from "../hooks/useColors";

export default function About() {
  const { colors } = useColors();

  const { t } = useTranslation("about");

  const isPhoneVersion = useBreakpointValue({ base: true, md: false });

  return (
    <Grid
      flex="1"
      templateColumns="1fr"
      templateRows="repeat(3, 1fr)"
      gap={5}
      color={colors.color}
    >
      <GridItem>
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="flex-start"
          gap={2}
          maxW="80%"
          margin="0 auto"
        >
          <Image
            alt="Profile Image"
            src={Profile2}
            placeholder="blur"
            height={isPhoneVersion ? "190px" : "250px"}
            width={isPhoneVersion ? "190px" : "260px"}
            layout="fixed"
          />

          <Text fontSize={["md", "lg", "lg", "lg", "2xl"]} fontWeight="medium">
            🐱‍💻 {t("title")}
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex
          flex="1"
          flexDir="column"
          w="80%"
          margin="0 auto"
          justifyContent="flex-start"
          fontSize={["xs", "sm", "sm", "sm", "md"]}
          gap={6}
        >
          <Text textAlign="center">{t("description")}</Text>

          <Text fontWeight="medium">{t("aboutMe")}</Text>

          <Flex flexDir="column">
            <li>🐱 {t("list1")}</li>
            <li>🌱 {t("list2")}</li>
            <li>💬 {t("list3")}🤣</li>
            <li>🚀 {t("list4")} </li>
            <li>🤔 {t("list5")} </li>
            <li>💡 {t("list6")}</li>
            <li>👻 {t("list7")} </li>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex
          w={["80%", "70%", "30%"]}
          margin="0 auto"
          flexDir="column"
          gap={2}
          fontSize={["xs", "sm", "sm", "sm", "md"]}
        >
          <Text fontWeight="medium">{t("tools")}</Text>

          <SimpleGrid color={colors.color} minChildWidth="25px" gap={2}>
            <Tooltip label="JavaScript" placement="top">
              <Icons.JavaScript color="#EFD81D" size="25px" />
            </Tooltip>

            <Tooltip label="TypeScript" placement="top">
              <Icons.Typescript color="#2F74C0" size="25px" />
            </Tooltip>

            <Tooltip label="ReactJS" placement="top">
              <Icons.React color="#61DAFB" size="25px" />
            </Tooltip>

            <Tooltip label="NextJS" placement="top">
              <Icons.Nextjs size="25px" />
            </Tooltip>

            <Tooltip label="NodeJS" placement="top">
              <Icons.Nodejs color="#6EA560" size="25px" />
            </Tooltip>

            <Tooltip label="Linux" placement="top">
              <Icons.Linux size="25px" />
            </Tooltip>

            <Tooltip label="Git" placement="top">
              <Icons.Git color="#E84E31" size="25px" />
            </Tooltip>

            <Tooltip label="HTML5" placement="top">
              <Icons.Html5 color="#F16524" size="25px" />
            </Tooltip>

            <Tooltip label="CSS3" placement="top">
              <Icons.Css3 color="#00A2D6" size="25px" />
            </Tooltip>
          </SimpleGrid>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export const getStaticProps: GetStaticProps  = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(String(ctx.locale), [
        "header",
        "about",
      ])),
    },
  };
};
