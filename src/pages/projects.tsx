import { SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useColors } from "../hooks/useColors";

export default function Projects() {
  const { colors } = useColors();

  return (
    <SimpleGrid
      flex="1"
      gap={5}
      minChildWidth={["280px", "300px", "320px", "340px"]}
      p="10px 10px 0 10px"
    >
      {/* //Linkedin */}
      {/* <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Clone Linkedin
        </Text>
        <Link href="https://clone-linkedin-shimmer.netlify.app/" passHref>
          <a target="_blank">
            <Image
              src="./images/Linkedin.png"
              alt="Clone Linkedin"
              borderRadius="10"
            />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Working with responsivity with 3 columns.
        </Text>
      </Box> */}

      {/* //Vercel */}
      {/* <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Clone Vercel
        </Text>
        <Link href="https://clone-vercel.netlify.app/" passHref>
          <a target="_blank">
            <Image
              src="./images/Vercel.png"
              alt="Clone Vercel"
              borderRadius="10"
            />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Handling title effect.
        </Text>
      </Box> */}

      {/* //Twitter */}
      {/* <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Clone Twitter
        </Text>
        <Link href="https://clone-twitter-responsive.netlify.app/" passHref>
          <a target="_blank">
            <Image
              src="./images/Twitter.png"
              alt="Clone Twitter"
              borderRadius="10"
            />
          </a>
        </Link>

        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Improved responsivity work with 3 columns.
        </Text>
      </Box> */}

      {/* //Pinterest */}
      {/* <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Clone Pinterest
        </Text>
        <Link href="https://clone-pinterest.netlify.app/" passHref>
          <a target="_blank">
            <Image
              src="./images/Pinterest.png"
              alt="Clone Pinterest"
              borderRadius="10"
            />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Custom image placement.
        </Text>
      </Box> */}

      {/* //Mercado Livre */}
      {/* <Box borderRadius={8}>
        <Text textAlign="center" pb={1} fontWeight="bold">
          Clone Mercado Livre
        </Text>
        <Link href="https://clone-mercado-livre.netlify.app/" passHref>
          <a target="_blank">
            <Image
              src="./images/Mercado_Livre.png"
              alt="Clone Mercado Livre"
              borderRadius="10"
            />
          </a>
        </Link>
        <Text pt={1} fontSize={["xs", "sm", "sm", "sm", "md"]}>
          Product sales page basics.
        </Text>
      </Box> */}
    </SimpleGrid>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(String(ctx.locale), [
        "common",
        "header",
      ])),
    },
  };
};
