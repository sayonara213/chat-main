import {createGlobalStyle, ThemeProvider} from "styled-components";
import {normalize} from "./normalize";
import {reset} from "./reset";
import mainFont from "../assets/fonts/SF-Pro-Display-Regular.ttf"

export const FONT_SIZE = {
    small: "16px",
    medium: "20px",
    large: "30px",
}
export const FONT_WEIGHT = {
    light: "300",
    normal: "400",
    bold: "700"
}
export const COLOR = {
    background: "#2F3E46",
    primary: "#354F52",
    secondary: "#52796F",
    text: "#FFFFFF",
    textSecondary: "#CAD2C5",
}
export const BORDER_RADIUS = {
    small: "5px",
    medium: "15px",
    large: "20px",
}
export const FONT = {
    bold: "bold",
};

export const theme = {
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    font: FONT,
    borderRadius: BORDER_RADIUS,
    color: COLOR,
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "bold";
    src: url(${mainFont});
    font-display: swap;
  }
  
  ${normalize}
  ${reset}
`;

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme = {theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    );
};

