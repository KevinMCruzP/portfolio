import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import Flag from "react-flagkit";
import { RiArrowDownSLine } from "react-icons/ri";
import { useColors } from "../../hooks/useColors";

export function SelectLanguage() {
  const router = useRouter();
  const { t, i18n } = useTranslation("header");
  const { colors } = useColors();
  const [language, setLanguage] = useState<string>(i18n.language);
  const isPhoneVersion = useBreakpointValue({ base: true, md: false });

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
            width="-webkit-max-content"
            variant="filled"
            bg={colors.subBg}
            _hover={{
              borderColor: "#7928CA",
            }}
            border="solid 1px #29214e"
            zIndex="1"
            rightIcon={!isPhoneVersion && <RiArrowDownSLine />}
            size={isPhoneVersion ? "0" : "md"}
            p={isPhoneVersion ? "0" : "10px"}
          >
            <Flex flexDir="column" gap="5px">
              {!isPhoneVersion && (
                <Text align="start" fontSize={10} color={colors.color}>
                  {t("languages")}
                </Text>
              )}
              <Text align="start">
                {language === "pt-BR" ? (
                  <Flag country="BR" size={20} />
                ) : language === "en" ? (
                  <Flag country="US" size={20} />
                ) : (
                  language === "es" && <Flag country="CL" size={20} />
                )}
              </Text>
            </Flex>
          </MenuButton>

          <MenuList
            bg={colors.subBg}
            maxH="260px"
            minW={["100px", "100px", "150px"]}
            overflow="auto"
            fontSize={13}
            border="solid 1px #29214e"
          >
            <MenuItem
              px={3}
              borderLeft="solid 2px transparent"
              _hover={{
                borderLeftColor: "#7928CA",
                bg: "none",
              }}
              onClick={() => handleSelectLanguage("pt-BR")}
              justifyContent="space-between"
            >
              <Text>pt-BR</Text>
              <Flag country="BR" size={22} />
            </MenuItem>

            <MenuItem
              px={3}
              borderLeft="solid 2px transparent"
              _hover={{
                borderLeftColor: "#7928CA",
                bg: "none",
              }}
              onClick={() => handleSelectLanguage("es")}
              justifyContent="space-between"
            >
              <Text>es</Text>
              <Flag country="CL" size={22} />
            </MenuItem>

            <MenuItem
              px={3}
              borderLeft="solid 2px transparent"
              _hover={{
                borderLeftColor: "#7928CA",
                bg: "none",
              }}
              onClick={() => handleSelectLanguage("en")}
              justifyContent="space-between"
            >
              <Text>en</Text>
              <Flag country="US" size={22} />
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
