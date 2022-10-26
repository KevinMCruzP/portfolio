import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  description: string;
  image: React.ReactElement;
}

export function ProjectItem({ title, description, image }: ProjectItemProps) {
  return (
    <Box borderRadius={8}>
      <Text textAlign="center" pb={1} fontWeight="bold">
        {title}
      </Text>
      <Link href="https://moveit-kevinmcruzp.vercel.app/" passHref>
        <a target="_blank">{image}</a>
      </Link>
      <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
        {description}
      </Text>
    </Box>
  );
}
