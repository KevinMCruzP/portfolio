import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import podcast from "../../public/podcast.png";
import { useColors } from "../hooks/useColors";

export function PodcastImg() {
  const { colors } = useColors();

  const PodcastImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "alt", "placeholder", "blurDataURL"].includes(prop),
  });

  return (
    <PodcastImage
      src={podcast}
      alt="Move It page"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
