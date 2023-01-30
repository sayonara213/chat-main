import styled from 'styled-components'

export const ChatSettingsWrap = styled.div`
    width: 200px;
    height: 300px;
    padding: 25px;
    background-color: ${(props) => props.theme.color.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
`

export const ChatName = styled.h1`
    margin: 0;
    font-size: 18px;
    color: ${(props) => props.theme.color.textSecondary};
    font-family: 'regular', sans-serif;
`

export const ChatSettingsButton = styled.button`
    width: 100%;
    height: 50px;
    color: ${(props) => props.theme.color.textSecondary};
    background-color: ${(props) => props.theme.color.dark};
    border: none;
    border-radius: 15px;
`
