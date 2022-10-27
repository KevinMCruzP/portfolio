import { GridItem, Text } from "@chakra-ui/react";
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
      justifyContent="center"
      bg={colors.tooltipBg}
      p="25px 8px"
      gap={2}
      borderRadius="10px"
    >
      {image}
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