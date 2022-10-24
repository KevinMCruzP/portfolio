import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";
import { useColors } from "../../hooks/useColors";

interface TooltipProps extends ChakraTooltipProps {
  label: string;
  children: React.ReactNode;
}

export function Tooltip({ label, children, ...rest }: TooltipProps) {
  const { colors } = useColors();

  return (
    <ChakraTooltip
      label={label}
      color={colors.color}
      bg={colors.tooltipBg}
      border="1px solid"
      borderColor={colors.tooltipBorder}
      {...rest}
    >
      {children}
    </ChakraTooltip>
  );
}
