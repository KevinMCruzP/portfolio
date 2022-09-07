import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
// import {BsFillCloudMoonFill} from 'react-icons/bs'
// import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { WiCloud, WiStars } from "react-icons/wi";
import { useColors } from "../../hooks/useColors";
import styles from "./styles.module.scss";

type ThemeSwitcherProps = {
  color?: string;
};

export function ThemeSwitcher({ color = "white" }: ThemeSwitcherProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  const { colors } = useColors();

  return (
    <header>
      <IconButton
        icon={
          colorMode === "light" ? (
            <Flex alignItems={"center"}>
              <Flex position={"absolute"} top={"4px"} left={"9px"}>
                <WiCloud color="white" size="22px" />
              </Flex>
              <WiCloud color="white" size="22px" />
              <RiSunLine color="#fbc02d" size="22px" />

              {/* Hover button light mode */}
              <Flex
                className={styles.hoverDarkButton}
                align={"center"}
                borderRadius={"50%"}
                bg={"#1D282C"}
                boxSize={"0px"}
              >
                <RiMoonLine color="#C9D7D8" size="22px" />
                <WiStars color="white" size="22px" />
              </Flex>
            </Flex>
          ) : (
            <Flex alignItems={"center"}>
              {/* Hover button dark mode */}
              <Flex
                className={styles.hoverLightButton}
                align={"center"}
                borderRadius={"50%"}
                bg={"#20A1C1"}
                boxSize={"0px"}
              >
                <WiCloud color="white" size="22px" />
                <RiSunLine color="#fbc02d" size="22px" />
              </Flex>

              <RiMoonLine color="#C9D7D8" size="22px" />
              <WiStars color="white" size="22px" />
            </Flex>
          )
        }
        className={styles.themeSwitcher}
        variant="switchTheme"
        aria-label="Color mode switcher"
        colorScheme="whiteAlpha"
        borderRadius={50}
        width={"80px"}
        height={"40px"}
        bg={colors.switchColor}
        onClick={toggleColorMode}
        _hover={{ bg: colors.switchColor }}
      >
        Switch Mode
      </IconButton>
    </header>
  );
}
