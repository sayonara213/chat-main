import styled from 'styled-components'

export const MessageInputWrap = styled.div`
    z-index: 2;

    margin: 20px;
    padding: 10px 0;
    width: calc(100% - 40px);
    height: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.color.input};
    border-radius: 8px;
    box-shadow: 0 -25px 5px #23333c;
`

export const Input = styled.textarea`
    margin: 0 20px;
    padding: 0;
    width: 90%;
    white-space: pre-line;
    border: none;
    outline: none;
    background-color: unset;
    color: ${(props) => props.theme.color.background};
    font-family: ${(props) => props.theme.font.regular};
    &::placeholder {
        color: ${(props) => props.theme.color.background};
    }

    resize: none;
`
export const ButtonIcon = styled.img`
    width: auto;
    height: auto;

    cursor: pointer;
`
