import {
  Flex,
  Grid,
  GridItem,
  Kbd,
  keyframes,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useKBar } from "kbar";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Icons } from "../assets/Icons";
import { Profile } from "../assets/Profile";
import { useColors } from "../hooks/useColors";

const Home: NextPage = () => {
  const { query } = useKBar();

  const animationKeyFrames = keyframes`
  0% { background-position: 0% }
  100% { background-position: 400% }
`;

  const { colors } = useColors();

  const isPhoneVersion = useBreakpointValue({ base: true, md: false });

  const animation = `${animationKeyFrames} 10s linear infinite`;

  return (
    <Grid
      flex="1"
      templateColumns={isPhoneVersion ? "1fr" : "repeat(2, 1fr)"}
      templateRows={isPhoneVersion ? "repeat(2, 1fr)" : "none"}
      alignContent="center"
    >
      <GridItem display="flex" justifyContent="center" alignItems="center">
        <Flex
          height={["200px", "200px", "300px", "400px"]}
          width={["200px", "200px", "300px", "400px"]}
        >
          <Profile />
        </Flex>
      </GridItem>

      <GridItem
        display="flex"
        alignItems={isPhoneVersion ? "flex-start" : "center"}
        justifyContent={isPhoneVersion ? "center" : "flex-start"}
        gap={2}
      >
        <Flex flexDir="column" w="-webkit-max-content">
          <Text
            bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
            bgClip="text"
            animation={animation}
            bgSize="400%"
            fontSize={["2rem", "3rem", "3rem", "4rem"]}
            fontWeight="bold"
            letterSpacing="0.75rem"
          >
            SOFTWARE
          </Text>
          <Text
            bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
            bgClip="text"
            animation={animation}
            bgSize="400%"
            fontSize={["1.8rem", "2.8rem", "2.8rem", "3.8rem"]}
            fontWeight="semibold"
            letterSpacing={["0.73rem", "0.7rem", "0.7rem", "0.69rem"]}
          >
            DEVELOPER
          </Text>
          <Text
            bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
            bgClip="text"
            animation={animation}
            bgSize="400%"
            fontSize={["1.6rem", "2.6rem", "2.6rem", "3.6rem"]}
            fontWeight="light"
            letterSpacing="0.87rem"
          >
            FULLSTACK
          </Text>

          <Flex onClick={query?.toggle} cursor="pointer" align="center" gap={2}>
            <Text fontSize={["xs", "sm", "sm", "sm", "md"]} fontWeight="medium">
              Press <Kbd bg="#1C1C1C">ctrl</Kbd> + <Kbd bg="#1C1C1C">k</Kbd> to
              navigate
            </Text>

            <Icons.Command fontSize={15} />
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Home;

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
