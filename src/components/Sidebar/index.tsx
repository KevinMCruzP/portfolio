import { Flex, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { Icons } from "../../assets/Icons";
import { useColors } from "../../hooks/useColors";

export function Sidebar() {
  const phone = "+56921843543";
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`;
  const urlLinkedin = "https://www.linkedin.com/in/kevincruzpizarro/";
  const urlGithub = "https://github.com/KevinMCruzP";
  const urlInstagram = "https://www.instagram.com/kevin.pizarro.cruz/";

  const { colors } = useColors();
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
      <Text pt={["5px", "5px", "15px"]}>Kevin</Text>
      <Flex gap={4} h="100%" flexDir="column" justifyContent="center">
        <Tooltip
          label="Linkedin"
          placement="right"
          color={colors.color}
          bg="#29214e"
          border="1px solid #7928CA"
        >
          <Flex>
            <Link href={urlLinkedin}>
              <a target="_blank">
                <Icons.Linkedin size="30px" />
              </a>
            </Link>
          </Flex>
        </Tooltip>

        <Tooltip
          label="Github"
          placement="right"
          color={colors.color}
          bg="#29214e"
          border="1px solid #7928CA"
        >
          <Flex>
            <Link href={urlGithub}>
              <a target="_blank">
                <Icons.Github size="30px" />
              </a>
            </Link>
          </Flex>
        </Tooltip>

        <Tooltip
          label="Instagram"
          placement="right"
          color={colors.color}
          bg="#29214e"
          border="1px solid #7928CA"
        >
          <Flex>
            <Link href={urlInstagram}>
              <a target="_blank">
                <Icons.Instagram size="30px" />
              </a>
            </Link>
          </Flex>
        </Tooltip>

        <Tooltip
          label="Whatsapp"
          placement="right"
          color={colors.color}
          bg="#29214e"
          border="1px solid #7928CA"
        >
          <Flex>
            <Link href={urlAPIWhatsapp}>
              <a target="_blank">
                <Icons.Whatsapp size={30} />
              </a>
            </Link>
          </Flex>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
