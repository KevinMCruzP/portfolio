import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import feedback from "../../public/feedback.png";
import { useColors } from "../hooks/useColors";

export function Feedback() {
  const { colors } = useColors();

  const FeedbackImg = chakra(Image, {
    shouldForwardProp: (prop) => ["src", "alt"].includes(prop),
  });

  return (
    <FeedbackImg
      src={feedback}
      alt="Move It"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
