import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useColors } from "../../hooks/useColors";
import { SelectLanguage } from "../SelectLanguage";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  const { colors } = useColors();
  const { t, i18n } = useTranslation("header");
  const isPhoneVersion = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      w="100%"
      h="60px"
      align="center"
      justify="flex-end"
      gap={5}
      color={colors.color}
    >
      <Flex flex={1} justifyContent="space-between">
        <Flex>
          <Text>Kevin Cruz</Text>
        </Flex>
        <Flex gap={5}>
          <Text>{t("about")}</Text>
          <Text>{t("portfolio")}</Text>
          <Text>{t("contact")}</Text>
        </Flex>
      </Flex>
      <SelectLanguage />
      <ThemeSwitcher />
    </Flex>
  );
}
