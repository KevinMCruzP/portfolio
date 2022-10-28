import { Flex, GridItem, Text } from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

interface FeedbackItemProps {
  image: React.ReactElement;
  typeFeedback: string;
}

export function FeedbackItem({ image, typeFeedback }: FeedbackItemProps) {
  const { colors } = useColors();
  return (
    <GridItem
      display="flex"
      flexDir="column"
      alignItems="center"
      bg={colors.tooltipBg}
      p={["12px 4px", "12px 4px", "24px 8px"]}
      gap={2}
      borderRadius="10px"
      cursor="pointer"
      border="2px solid transparent"
      _hover={{
        border: "2px solid",
        borderColor: "#8257E6",
      }}
    >
      <Flex w={["30px", "35px", "40px"]}>{image}</Flex>
      <Text
        textAlign="center"
        fontSize={["sm", "md", "md", "md", "lg"]}
        fontWeight="medium"
      >
        {typeFeedback}
      </Text>
    </GridItem>
  );
}
