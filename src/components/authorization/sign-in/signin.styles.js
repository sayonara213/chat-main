import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 300px;
    height: auto;
    padding: 25px;
    background-color: ${(props) => props.theme.color.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`

export const LoginImage = styled.img`
    margin-bottom: 15px;

    width: 50%;
    height: auto;

    filter: drop-shadow(1px 10px 10px RGBA(0, 0, 0, 0.2));
`

export const OtherButtonsWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const OtherButton = styled.a`
    font-size: 14px;
    color: #282c34;
    font-family: 'regular', sans-serif;
`
