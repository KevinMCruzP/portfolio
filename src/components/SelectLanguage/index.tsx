import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { useColors } from "../../hooks/useColors";

export function SelectLanguage() {
  const router = useRouter();
  const { t, i18n } = useTranslation("select-language");

  const { colors } = useColors();

  const [language, setLanguage] = useState<string>(i18n.language);

  function handleSelectLanguage(language: string) {
    setLanguage(language);

    router.push(router.asPath, undefined, { locale: language });
  }

  return (
    <Menu matchWidth autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            fontSize={15}
            fontWeight="normal"
            width="8rem"
            variant="filled"
            bg={colors.bgHover}
            size="md"
            rightIcon={<RiArrowDownSLine />}
            zIndex="1"
          >
            <Flex flexDir="column" gap="5px">
              <Text align="start" fontSize={10} color={colors.color}>
                {t("languages")}
              </Text>
              <Text align="start" fontSize={15}>
                {language === "pt-BR"
                  ? "pt-BR"
                  : language === "en"
                  ? "en"
                  : language === "es" && "es"}
              </Text>
            </Flex>
          </MenuButton>

          <MenuList
            bg={colors.bgHover}
            maxH="260px"
            overflow="auto"
            fontSize={13}
          >
            <MenuItem
              px={4}
              _hover={{ bg: `${colors.bg}` }}
              onClick={() => handleSelectLanguage("pt-BR")}
            >
              <Text>pt-BR</Text>
            </MenuItem>
            <MenuItem
              px={4}
              _hover={{ bg: `${colors.bg}` }}
              onClick={() => handleSelectLanguage("es")}
            >
              <Text>es</Text>
            </MenuItem>
            <MenuItem
              px={4}
              _hover={{ bg: `${colors.bg}` }}
              onClick={() => handleSelectLanguage("en")}
            >
              <Text>en</Text>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
