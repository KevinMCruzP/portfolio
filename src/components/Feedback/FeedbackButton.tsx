import { Fade, Flex, Text } from "@chakra-ui/react";
import { Icons } from "../../assets/Icons";
import { useColors } from "../../hooks/useColors";

interface FeedbackButtonProps {
  isOpen?: boolean;
}

export function FeedbackButton({ isOpen = false }: FeedbackButtonProps) {
  const { colors } = useColors();

  return (
    <Flex
      cursor="pointer"
      bg="#7928CA"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      gap={isOpen ? "4px" : "0"}
      p="5px"
      borderRadius={isOpen ? "50px" : "full"}
      w={isOpen ? "-webkit-max-content" : "40px"}
      fontSize={isOpen ? "16px" : "0"}
      _hover={{
        width: "-webkit-max-content",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "all 0.3s",
        gap: "4px",
      }}
      transition={isOpen ? "none" : "all 0.3s"}
      border="1px solid"
      borderColor={colors.selectLangBorder}
      color={"gray.50"}
      fontWeight="bold"
    >
      {isOpen ? (
        <Fade in={isOpen}>
          <Icons.SmileIcon2 size="30px" />
        </Fade>
      ) : (
        <Fade in={!isOpen}>
          <Icons.SmileIcon size="30px" />
        </Fade>
      )}

      <Text>Feedback</Text>
    </Flex>
  );
}
