import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import redditClone from "../../public/redditClone.png";
import { useColors } from "../hooks/useColors";

export function RedditCloneImg() {
  const { colors } = useColors();

  const RedditCloneImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "alt", "placeholder", "blurDataURL"].includes(prop),
  });

  return (
    <RedditCloneImage
      src={redditClone}
      alt="Reddit clone page"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
