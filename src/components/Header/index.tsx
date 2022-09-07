import { Flex, Select } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";
import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  const { colors } = useColors();

  return (
    <Flex
      w={"100vw"}
      h="60px"
      align="center"
      justify="flex-end"
      bg={colors.bgHover}
      p={2}
      gap={4}
    >
      <Select width="50px" size="xs" placeholder="Select option">
        <option>pt-Br</option>
        <option>us</option>
        <option>es</option>
      </Select>
      <ThemeSwitcher color={colors.color} />
    </Flex>
  );
}
