import { Flex, Input, Kbd, Text } from "@chakra-ui/react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
import { useRouter } from "next/router";
import { useColors } from "./useColors";

interface CommandBarProps {
  children: React.ReactNode;
}

export function CommandBar({ children }: CommandBarProps) {
  const router = useRouter();

  const { colors } = useColors();

  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home",
      perform: () => router.push("/"),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about",
      perform: () => router.push("/about"),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects",
      perform: () => router.push("/projects"),
    },
  ];

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <Flex as={KBarPositioner} bg="rgb(0, 0, 0, 0.6)">
            <KBarAnimator>
              <Input
                w={[350, 350, 600]}
                h={50}
                as={KBarSearch}
                defaultPlaceholder="Type a command or search"
                _placeholder={{ color: colors.color }}
                border="solid 1px"
                borderColor={colors.tooltipBg}
                focusBorderColor={colors.tooltipBorder}
                borderRadius="10px 10px 0 0"
              />

              <RenderResult />
            </KBarAnimator>
          </Flex>
        </KBarPortal>

        {children}
      </KBarProvider>
    </>
  );
}

function RenderResult() {
  const { results } = useMatches();
  const { colors } = useColors();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === "string" ? (
          <Text fontSize={["xs", "sm", "sm", "sm", "md"]} fontWeight="medium">
            {item}
          </Text>
        ) : (
          <Flex
            align="center"
            bg={active ? colors.tooltipBg : "transparent"}
            p="5px 10px"
            h="50px"
            cursor="pointer"
            borderRadius={item.id === "projects" ? "0 0 10px 10px" : 0}
            justify="space-between"
            color={colors.color}
          >
            <Text>{item.name}</Text>
            {item.id === "home" && <Kbd bg={colors.tooltipBg}>H</Kbd>}
            {item.id === "about" && <Kbd bg={colors.tooltipBg}>A</Kbd>}
            {item.id === "projects" && <Kbd bg={colors.tooltipBg}>P</Kbd>}
          </Flex>
        );
      }}
    />
  );
}

RenderResult.displayName = "RenderResult";
