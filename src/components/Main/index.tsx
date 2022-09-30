import { Flex, Grid, GridItem, keyframes, Text } from "@chakra-ui/react";
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

  const animation = `${animationKeyFrames} 10s linear infinite`;

  return (
    <Grid
      flex={1}
      templateColumns="50px repeat(2, 1fr)"
      alignContent="center"
      bgImage="url('/Abstract.svg')"
      bgPosition="center"
      bgRepeat="repeat"
    >
      <GridItem>
        <Flex gap={4} h="100%" flexDir="column" justifyContent="center">
          <RiLinkedinBoxFill size="30px" />
          <RiGithubFill size="30px" />
          <RiInstagramFill size="30px" />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex flex="1" justifyContent="center" alignContent="center">
          <Flex height="400px" width="350px">
            <Profile />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem flexDir="column">
        <Flex flex="1">
          <Flex
            flexDir="column"
            w="-webkit-max-content"
            textAlign="justify"
            alignContent="center"
          >
            <Text
              bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
              bgClip="text"
              animation={animation}
              bgSize="400%"
              fontSize="4rem"
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
              fontSize="2.5rem"
              fontWeight="bold"
              letterSpacing="1.25rem"
            >
              DEVELOPER
            </Text>
            <Text
              bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
              bgClip="text"
              animation={animation}
              bgSize="400%"
              fontSize="2.1rem"
              fontWeight="light"
              letterSpacing="1rem"
            >
              FULLSTACK
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}
