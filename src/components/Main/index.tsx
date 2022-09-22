import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Profile } from "../../assets/Profile";

export function Main() {
  return (
    <Grid flex={1} templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Flex height="400px" width="350px">
          <Profile />
        </Flex>
      </GridItem>
      <GridItem flexDir="column">
        <Flex flexDir="column" w="-webkit-max-content" textAlign="justify">
          <Text fontSize="4rem" fontWeight="bold" letterSpacing="0.75rem">
            SOFTWARE
          </Text>
          <Text fontSize="2.5rem" fontWeight="bold" letterSpacing="1.25rem">
            DEVELOPER
          </Text>
          <Text
            boxSize="-moz-fit-content"
            fontSize="2.1rem"
            fontWeight="light"
            w="-webkit-max-content"
            textAlign="justify"
          >
            FRONTEND & BACKEND
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
