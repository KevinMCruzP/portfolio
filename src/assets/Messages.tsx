import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import messages from "../../public/message.png";
import { useColors } from "../hooks/useColors";

export function MessagesImg() {
  const { colors } = useColors();

  const MessagesImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "alt", "placeholder", "blurDataURL"].includes(prop),
  });

  return (
    <MessagesImage
      src={messages}
      alt="Dash Admin page"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
