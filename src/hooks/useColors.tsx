import { useColorModeValue } from "@chakra-ui/react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Colors = {
  bg: string;
  bgHover: string;
  divider: string;
  color: string;
  primary: string;
  secondary: string;
  tertiary: string;
};

type ColorsContextProps = {
  colors: Colors;
};

type ColorsProviderProps = {
  children: ReactNode;
};

//Context
export const ColorsContext = createContext({} as ColorsContextProps);

//Provider
export function ColorsProvider({ children }: ColorsProviderProps) {
  const [colors, setColors] = useState({} as Colors);

  const bg = useColorModeValue("gray.50", "gray.900");
  const bgHover = useColorModeValue("white", "gray.800");
  const divider = useColorModeValue("gray.400", "gray.200");
  const color = useColorModeValue("gray.800", "white");
  const primary = "red.700";
  const secondary = "yellow.800";
  const tertiary = "green.700";

  useEffect(() => {
    const data: Colors = {
      bg,
      bgHover,
      divider,
      color,
      primary,
      secondary,
      tertiary,
    };

    setColors(data);
  }, [bg]);

  return (
    <ColorsContext.Provider value={{ colors }}>
      {children}
    </ColorsContext.Provider>
  );
}

export const useColors = () => useContext(ColorsContext);
