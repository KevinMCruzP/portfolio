import { chakra } from "@chakra-ui/react";
import Image from "next/image";
import dashAdmin from "../../public/dashadmin.png";
import { useColors } from "../hooks/useColors";

export function DashAdminImg() {
  const { colors } = useColors();

  const DashAdminImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "alt", "placeholder", "blurDataURL"].includes(prop),
  });

  return (
    <DashAdminImage
      src={dashAdmin}
      alt="Dash Admin page"
      placeholder="blur"
      borderRadius="10"
      border="1px solid"
      borderColor={colors.divider}
    />
  );
}
