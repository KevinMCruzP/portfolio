import {
  Flex,
  HStack,
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
      align="center"
      justify="flex-end"
      color={colors.color}
      position="sticky"
      top={0}
      zIndex="1"
      gap={[0, 2, 2, 4, 6]}
      pt={["5px", "5px", "15px"]}
      pr={["5px", "5px", "20px"]}
    >
      <HStack
        spacing={[4, 4, 4, 6, 8]}
        fontSize={["sm", "md", "md", "md", "lg"]}
        fontWeight="medium"
      >
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
      </HStack>
      <SelectLanguage />
      <ThemeSwitcher />
    </Flex>
  );
}
