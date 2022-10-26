import { Link as ChakraLink } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  href: string;
  children: React.ReactNode;
}

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  const router = useRouter();
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref {...rest}>
      <ChakraLink
        borderBottom={asPath === href ? "3px solid #7928CA" : ""}
        transition="0.2s filter"
        _hover={{ filter: "brightness(1.2)" }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}
