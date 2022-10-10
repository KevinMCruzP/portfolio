import {
  Flex,
  Grid,
  GridItem,
  keyframes,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { Profile } from "../../assets/Profile";

export function Main() {
  const animationKeyFrames = keyframes`
  0% { background-position: 0% }
  100% { background-position: 400% }
`;

  const isPhoneVersion = useBreakpointValue({ base: true, md: false });

  const animation = `${animationKeyFrames} 10s linear infinite`;

  return (
    <Grid
      flex={1}
      templateColumns={isPhoneVersion ? "50px 1fr" : "50px repeat(2, 1fr)"}
      templateRows={isPhoneVersion ? "repeat(2, 1fr)" : "none"}
      alignContent="center"
    >
      <GridItem rowSpan={2}>
        <Flex gap={4} h="100%" flexDir="column" justifyContent="center">
          <RiLinkedinBoxFill size="30px" />
          <RiGithubFill size="30px" />
          <RiInstagramFill size="30px" />
        </Flex>
      </GridItem>

      <GridItem display="flex" justifyContent="center" alignContent="center">
        <Flex
          height={["200px", "300px", "400px"]}
          width={["200px", "300px", "400px"]}
        >
          <Profile />
        </Flex>
      </GridItem>

      <GridItem
        display="flex"
        alignItems={isPhoneVersion ? "flex-start" : "center"}
        justifyContent={isPhoneVersion ? "center" : "none"}
        gap={2}
      >
        <Flex flexDir="column" w="-webkit-max-content">
          <Text
            bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
            bgClip="text"
            animation={animation}
            bgSize="400%"
            fontSize={["2rem", "3rem", "4rem"]}
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
            fontSize={["1.8rem", "2.8rem", "3.8rem"]}
            fontWeight="semibold"
            letterSpacing="0.68rem"
          >
            DEVELOPER
          </Text>
          <Text
            bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
            bgClip="text"
            animation={animation}
            bgSize="400%"
            fontSize={["1.6rem", "2.6rem", "3.6rem"]}
            fontWeight="light"
            letterSpacing="0.87rem"
          >
            FULLSTACK
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
