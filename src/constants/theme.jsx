import {createGlobalStyle, ThemeProvider} from "styled-components";
import {normalize} from "./normalize";
import {reset} from "./reset";

export const COLORS = {
    light: {
        background: "#eaecef",
        text: "#202b3b",
        document: "#f5f5f5",
        grey: "#9399a2",
        border: "#c7c7c7"
    },
    dark: {
        background: "#151310",
        text: "#FFFFFF",
        document: "#0a0a0a",
        grey: "#6d665d",
        border: "#373737"
    }
}

export const FONT_SIZE = {
    small: "16px",
    medium: "20px",
    large: "30px",
    city: "60px",
    cityPhone: "45px",
    temperature: "80px"
}

export const FONT_WEIGHT = {
    light: "300",
    normal: "400",
    bold: "700"
}
export const BORDER_RADIUS = {
    small: "5px",
    medium: "15px",
    large: "20px",
}

export const FONT = {
    bold: "bold",
};

export const light = {
    colors: COLORS.light,
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    font: FONT,
    borderRadius: BORDER_RADIUS
}
export const dark = {
    colors: COLORS.dark,
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    font: FONT,
    borderRadius: BORDER_RADIUS
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${reset}
`;

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme = {light}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    );
};

