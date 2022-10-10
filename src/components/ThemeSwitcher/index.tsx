import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
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
            <Flex alignItems={"center"} bg={colors.switchColor}>
              <Flex
                w="85px"
                justifyContent="center"
                className={styles.hoverLightButton}
              >
                <WiCloud color="white" size="22px" />
                <RiSunLine color="#fbc02d" size="22px" />
              </Flex>

              {/* Hover button light mode */}
              <Flex
                align={"center"}
                borderRadius={"50%"}
                bg={"#070907"}
                boxSize={"40px"}
              >
                <RiMoonLine color="#C9D7D8" size="22px" />
                <WiStars color="white" size="22px" />
              </Flex>
            </Flex>
          ) : (
            <Flex alignItems={"center"} bg={colors.switchColor}>
              {/* Hover button dark mode */}
              <Flex
                align={"center"}
                borderRadius={"50%"}
                bg={"#20A1C1"}
                boxSize={"40px"}
              >
                <WiCloud color="white" size="22px" />
                <RiSunLine color="#fbc02d" size="22px" />
              </Flex>
              <Flex
                w="85px"
                justifyContent="center"
                className={styles.hoverDarkButton}
              >
                <RiMoonLine color="#C9D7D8" size="22px" />
                <WiStars color="white" size="22px" />
              </Flex>
            </Flex>
          )
        }
        className={styles.themeSwitcher}
        variant="switchTheme"
        aria-label="Color mode switcher"
        borderRadius={50}
        width="85px"
        maxWidth="85px"
        height="40px"
        overflow="hidden"
        onClick={toggleColorMode}
        _hover={{ bg: colors.switchColor }}
      >
        Switch Mode
      </IconButton>
    </header>
  );
}
