import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useColors } from "../../hooks/useColors";
import { SelectLanguage } from "../SelectLanguage";
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
      w="100%"
      h="60px"
      align="center"
      justify="flex-end"
      bg={colors.bgHover}
      p={2}
      gap={5}
      color={colors.color}
    >
      <Flex flex={1} justifyContent="space-between">
        <Flex>
          <Text>Kevin Cruz</Text>
        </Flex>
        <Flex color="#d1cfcf" gap={5}>
          <Text>About</Text>
          <Text>Portfolio</Text>
          <Text>Contact</Text>
        </Flex>
      </Flex>
      {/* <Select
        width="75px"
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
      </Select> */}
      <SelectLanguage />
      <ThemeSwitcher />
    </Flex>
  );
}
