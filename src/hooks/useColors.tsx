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
  tooltipBg: string;
  tooltipBorder: string;
  selectLangBorder: string;
  selectLangPlaceholder: string;
  subBg: string;
  bgHover: string;
  divider: string;
  color: string;
  switchColor: string;
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

  const bg = useColorModeValue("gray.50", "#050409");
  const tooltipBg = useColorModeValue("gray.100", "#0c081b");
  const tooltipBorder = useColorModeValue("gray.200", "#7928CA");
  const selectLangBorder = useColorModeValue("gray.400", "#2f1e67");
  const selectLangPlaceholder = useColorModeValue("gray.200", "#7928CA");
  const subBg = useColorModeValue("gray.100", "#050409");
  const bgHover = useColorModeValue("white", "gray.800");
  const divider = useColorModeValue("gray.400", "#2f1e67");
  const color = useColorModeValue("gray.800", "white");
  const switchColor = useColorModeValue("#20A1C1", "#070809");
  const primary = "red.700";
  const secondary = "yellow.800";
  const tertiary = "green.700";

  useEffect(() => {
    const data: Colors = {
      bg,
      tooltipBg,
      tooltipBorder,
      selectLangBorder,
      selectLangPlaceholder,
      subBg,
      bgHover,
      divider,
      color,
      switchColor,
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
