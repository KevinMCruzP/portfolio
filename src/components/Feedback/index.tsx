import {
  Flex,
  Grid,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BugImage } from "../../assets/Bug";
import { IdeaImage } from "../../assets/Idea";
import { ThoughtImage } from "../../assets/Thought";
import { useColors } from "../../hooks/useColors";
import { FeedbackButton } from "./FeedbackButton";
import { FeedbackItem } from "./FeedbackItem";

export function Feedback() {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();

  const { colors } = useColors();

  return (
    <Popover
      placement="top-start"
      orientation="horizontal"
      onOpen={onOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Flex zIndex="1" position="absolute" right="10px" bottom="10px">
          <FeedbackButton isOpen={isOpen} />
        </Flex>
      </PopoverTrigger>

      <PopoverContent
        borderColor={colors.selectLangBorder}
        bg={colors.subBg}
        borderRadius="20px"
        w={["250px", "250px", "300px"]}
      >
        <PopoverHeader fontSize={["md", "md", "lg"]} border="none">
          <Text textAlign="center">Deixe seu feedback</Text>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            <FeedbackItem image={<BugImage />} typeFeedback="Bug" />
            <FeedbackItem image={<IdeaImage />} typeFeedback="Idea" />
            <FeedbackItem image={<ThoughtImage />} typeFeedback="Other" />
          </Grid>
          <Text
            align="center"
            pt="10px"
            fontSize={"x-small"}
            fontWeight="medium"
            color="gray.300"
          >
            Thanks for help me! ❤️
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
