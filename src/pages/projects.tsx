import { SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DashAdminImg } from "../assets/DashAdmin";
import { FeedbackImg } from "../assets/Feedback";
import { MoveItImg } from "../assets/MoveIt";
import { ProjectItem } from "../components/ProjectItem";
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
      <ProjectItem
        title={t("dashAdmin.title")}
        description={t("dashAdmin.description")}
        href="https://dashadmin-kevinmcruzp.vercel.app/"
        image={<DashAdminImg />}
      />

      {/* //Moveit */}
      <ProjectItem
        title={t("moveIt.title")}
        description={t("moveIt.description")}
        href="https://moveit-kevinmcruzp.vercel.app/"
        image={<MoveItImg />}
      />

      {/* //Feedback */}
      <ProjectItem
        title={t("feedBack.title")}
        description={t("feedBack.description")}
        href="https://nlw-return-react.vercel.app/"
        image={<FeedbackImg />}
      />
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
