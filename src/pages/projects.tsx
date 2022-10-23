import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useColors } from "../hooks/useColors";

export default function Projects() {
  const { colors } = useColors();

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
          DashAdmin
        </Text>
        <Link href="https://dashadmin-kevinmcruzp.vercel.app/" passHref>
          <a target="_blank">
            <Image src="./dashadmin.png" alt="DashAdmin" borderRadius="10" />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Working with dashboard design, charts, and tables.
        </Text>
      </Box>

      {/* //Moveit */}
      <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Move it
        </Text>
        <Link href="https://moveit-kevinmcruzp.vercel.app/" passHref>
          <a target="_blank">
            <Image src="./moveit.png" alt="MoveIt" borderRadius="10" />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Notification system to students or workers, to take a break and
          exercise.
        </Text>
      </Box>

      {/* //Feedback */}
      <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Feedback
        </Text>
        <Link href="https://nlw-return-react.vercel.app/" passHref>
          <a target="_blank">
            <Image src="./feedback.png" alt="Feedback" borderRadius="10" />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Feedback messages design.
        </Text>
      </Box>
    </SimpleGrid>
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
