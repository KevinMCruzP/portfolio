import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import moveIt from "../../public/moveit.png";
import { useColors } from "../hooks/useColors";

export function MoveIt() {
  const { colors } = useColors();

  const MoveItImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src", "alt"].includes(prop),
  });

  return (
    <MoveItImage
      src={moveIt}
      alt="Move It"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
