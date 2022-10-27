import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import feedbackImg from "../../public/feedback.png";
import { useColors } from "../hooks/useColors";

export function FeedbackImg() {
  const { colors } = useColors();

  const FeedbackImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src", "alt"].includes(prop),
  });

  return (
    <FeedbackImage
      src={feedbackImg}
      alt="Move It"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
