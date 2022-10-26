import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import dashAdmin from "../../public/dashadmin.png";
import { useColors } from "../hooks/useColors";

export function DashAdmin() {
  const { colors } = useColors();

  const DashAdminImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src", "alt"].includes(prop),
  });

  return (
    <DashAdminImage
      src={dashAdmin}
      alt="Move It"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
