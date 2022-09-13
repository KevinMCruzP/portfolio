import { Flex, Select } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useColors } from "../../hooks/useColors";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  const { colors } = useColors();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const router = useRouter();

  const languages = ["en", "pt-BR", "es"];

  function handleChangeLanguage(language: string) {
    setLanguage(language);
    router.push(router.asPath, undefined, { locale: language });
  }

  return (
    <Flex
      w={"100vw"}
      h="60px"
      align="center"
      justify="flex-end"
      bg={colors.bgHover}
      p={2}
      gap={4}
    >
      <Select
        width="80px"
        size="xs"
        onChange={(e) => {
          handleChangeLanguage(e.target.value);
        }}
      >
        <option value={i18n.language}>{i18n.language}</option>
        {languages.map((lng: string) => {
          if (lng !== i18n.language) {
            return (
              <option key={lng} value={lng}>
                {lng}
              </option>
            );
          }
        })}
      </Select>
      <ThemeSwitcher />
    </Flex>
  );
}
