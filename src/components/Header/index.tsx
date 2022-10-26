import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useColors } from "../../hooks/useColors";
import { SelectLanguage } from "../SelectLanguage";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ActiveLink } from "./Link";

export function Header() {
  const { colors } = useColors();
  const { t } = useTranslation("header");
  const isPhoneVersion = useBreakpointValue({ base: true, md: false });
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <Flex
      w="100%"
      align="center"
      justify="flex-end"
      color={colors.color}
      position="sticky"
      top={0}
      zIndex="1"
      gap={[2, 2, 4, 6]}
      pt={["5px", "5px", "15px"]}
      pr={["5px", "5px", "20px"]}
    >
      <HStack
        spacing={[2, 4, 6, 8]}
        fontSize={["sm", "md", "md", "md", "lg"]}
        fontWeight="medium"
      >
        <ActiveLink href="/">{t("home")}</ActiveLink>
        <ActiveLink href="/about">{t("about")}</ActiveLink>
        <ActiveLink href="/projects">{t("projects")}</ActiveLink>
      </HStack>
      <SelectLanguage />
      <ThemeSwitcher />
    </Flex>
  );
}
