import { Flex } from "@chakra-ui/react";
import { useKBar } from "kbar";
import Link from "next/link";
import { Icons } from "../../assets/Icons";
import { useColors } from "../../hooks/useColors";
import { Tooltip } from "../Tooltip";

export function Sidebar() {
  const phone = "+56921843543";
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`;
  const urlLinkedin = "https://www.linkedin.com/in/kevincruzpizarro/";
  const urlGithub = "https://github.com/KevinMCruzP";
  const urlInstagram = "https://www.instagram.com/kevin.pizarro.cruz/";

  const { colors } = useColors();
  const { query } = useKBar();
  return (
    <Flex
      h="100%"
      color={colors.color}
      position="sticky"
      top="0"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Flex as="span" pt="15px">
        <Icons.Command size="25px" onClick={query?.toggle} cursor="pointer" />
      </Flex>

      <Flex gap={4} h="100%" flexDir="column" justifyContent="center">
        <Tooltip label="Linkedin" placement="right">
          <Link href={urlLinkedin}>
            <a target="_blank">
              <Icons.Linkedin size="25px" />
            </a>
          </Link>
        </Tooltip>

        <Tooltip label="Github" placement="right">
          <Link href={urlGithub}>
            <a target="_blank">
              <Icons.Github size="25px" />
            </a>
          </Link>
        </Tooltip>

        <Tooltip label="Instagram" placement="right">
          <Link href={urlInstagram}>
            <a target="_blank">
              <Icons.Instagram size="25px" />
            </a>
          </Link>
        </Tooltip>

        <Tooltip label="Whatsapp" placement="right">
          <Link href={urlAPIWhatsapp}>
            <a target="_blank">
              <Icons.Whatsapp size="25px" />
            </a>
          </Link>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
