import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from './normalize'
import { reset } from './reset'
import regular from '../assets/fonts/Montserrat-VariableFont_wght.ttf'
import italic from '../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'

export const FONT_SIZE = {
    small: '12px',
    medium: '16px',
    large: '22px',
}
export const FONT_WEIGHT = {
    light: '300',
    normal: '400',
    bold: '700',
}
export const COLOR = {
    background: '#1A1A1A',
    dark: '#23333C',
    primary: '#245156',
    secondary: '#448A78',
    text: '#FFFFFF',
    textSecondary: '#FFFFFF',
    input: '#C8E3D6',
    time: '#b8e0c9',
}
export const BORDER_RADIUS = {
    small: '5px',
    medium: '15px',
    large: '20px',
}
export const FONT = {
    regular: 'regular',
    italic: 'italic',
}

export const theme = {
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    font: FONT,
    borderRadius: BORDER_RADIUS,
    color: COLOR,
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "regular";
    src: url(${regular});
    font-display: swap;
  }
  
  @font-face {
    font-family: "italic";
    src: url(${italic});
    font-display: swap;
  }
  
  ${normalize}
  ${reset}
  
  body {
    background: ${COLOR.background};
  }
  html {
    height: -webkit-fill-available;
  }
`

export const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}
