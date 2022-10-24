import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { DashAdmin } from "../assets/DashAdmin";
import { Feedback } from "../assets/Feedback";
import { MoveIt } from "../assets/MoveIt";
import { useColors } from "../hooks/useColors";

export default function Projects() {
  const { colors } = useColors();

  const { t } = useTranslation("projects");

  return (
    <SimpleGrid
      flex="1"
      gap={5}
      minChildWidth={["280px", "300px", "320px", "340px"]}
      p={["15px", "30px"]}
    >
      {/* //Dashadmin */}
      <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          {t("dashAdmin.title")}
        </Text>
        <Link href="https://dashadmin-kevinmcruzp.vercel.app/" passHref>
          <a target="_blank">
            <DashAdmin />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          {t("dashAdmin.description")}
        </Text>
      </Box>

      {/* //Moveit */}
      <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          {t("moveIt.title")}
        </Text>
        <Link href="https://moveit-kevinmcruzp.vercel.app/" passHref>
          <a target="_blank">
            <MoveIt />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          {t("moveIt.description")}
        </Text>
      </Box>

      {/* //Feedback */}
      <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          {t("feedBack.title")}
        </Text>
        <Link href="https://nlw-return-react.vercel.app/" passHref>
          <a target="_blank">
            <Feedback />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          {t("feedBack.description")}
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(String(ctx.locale), [
        "header",
        "projects",
      ])),
    },
  };
};
