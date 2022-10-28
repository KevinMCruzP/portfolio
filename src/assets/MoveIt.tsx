import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import moveIt from "../../public/moveit.png";
import { useColors } from "../hooks/useColors";

export function MoveIt() {
  const { colors } = useColors();

  const MoveItImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "alt", "placeholder", "blurDataURL"].includes(prop),
  });

  return (
    <MoveItImage
      src={moveIt}
      alt="Move It"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
