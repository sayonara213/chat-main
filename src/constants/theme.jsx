import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from './normalize'
import { reset } from './reset'

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

export const theme = {
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    borderRadius: BORDER_RADIUS,
    color: COLOR,
}

const GlobalStyle = createGlobalStyle`
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
