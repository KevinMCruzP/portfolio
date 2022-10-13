import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Icons } from "../../assets/Icons";
import { useColors } from "../../hooks/useColors";

export function Sidebar() {
  const { colors } = useColors();
  return (
    <Flex
      h="calc(100vh - 60px)"
      bg={colors.bg}
      color={colors.color}
      position="sticky"
      top="0"
    >
      <Flex gap={4} h="100%" flexDir="column" justifyContent="center">
        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link href="https://www.linkedin.com/in/kevincruzpizarro/">
            <a target="_blank">
              <Icons.Linkedin size="30px" />
            </a>
          </Link>
        </Flex>

        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link href="https://github.com/KevinMCruzP">
            <a target="_blank">
              <Icons.Github size="30px" />
            </a>
          </Link>
        </Flex>

        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link href="https://www.instagram.com/kevin.pizarro.cruz/">
            <a target="_blank">
              <Icons.Instagram size="30px" />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
