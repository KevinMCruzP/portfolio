import {
  MenuItem as ChakraMenuItem,
  MenuItemProps as ChakraMenuItemProps,
  Text,
} from "@chakra-ui/react";

interface MenuItemProps extends ChakraMenuItemProps {
  handleSelectLanguage: (language: string) => void;
  language: string;
  children: React.ReactNode;
}

export function MenuItem({
  handleSelectLanguage,
  language,
  children,
  ...rest
}: MenuItemProps) {
  return (
    <ChakraMenuItem
      px={3}
      borderLeft="solid 2px transparent"
      _hover={{
        borderLeftColor: "#7928CA",
        bg: "none",
      }}
      onClick={() => handleSelectLanguage(language)}
      justifyContent="space-between"
      {...rest}
    >
      <Text>{language}</Text>
      {children}
    </ChakraMenuItem>
  );
}
