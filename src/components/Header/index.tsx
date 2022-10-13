import {
  Flex,
  Link as ChakraLink,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useColors } from "../../hooks/useColors";
import { SelectLanguage } from "../SelectLanguage";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  const { colors } = useColors();
  const { t, i18n } = useTranslation("header");
  const isPhoneVersion = useBreakpointValue({ base: true, md: false });

  const { asPath } = useRouter();

  return (
    <Flex
      w="100%"
      h="60px"
      align="center"
      justify="flex-end"
      gap={5}
      color={colors.color}
      bg={colors.subBg}
      position="sticky"
      top={0}
      zIndex="1"
    >
      <Flex flex={1} justifyContent="space-between">
        <Flex>
          <Text>Kevin Cruz</Text>
        </Flex>
        <Flex gap={5}>
          <Text cursor="pointer">
            <Link href="/">
              <ChakraLink
                borderBottom={asPath === "/" ? "3px solid #7928CA" : ""}
                transition="0.2s filter"
                _hover={{ filter: "brightness(1.2)" }}
              >
                {t("home")}
              </ChakraLink>
            </Link>
          </Text>

          <Text cursor="pointer">
            <Link href="/about">
              <ChakraLink
                borderBottom={asPath === "/about" ? "3px solid #7928CA" : ""}
                transition="0.2s filter"
                _hover={{ filter: "brightness(1.2)" }}
              >
                {t("about")}
              </ChakraLink>
            </Link>
          </Text>

          <Text cursor="pointer">
            <Link href="/projects">
              <ChakraLink
                borderBottom={asPath === "/projects" ? "3px solid #7928CA" : ""}
                transition="0.2s filter"
                _hover={{ filter: "brightness(1.2)" }}
              >
                {t("projects")}
              </ChakraLink>
            </Link>
          </Text>
        </Flex>
      </Flex>
      <SelectLanguage />
      <ThemeSwitcher />
    </Flex>
  );
}
