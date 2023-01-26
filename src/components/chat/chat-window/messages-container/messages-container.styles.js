import styled from 'styled-components'

export const MessagesContainerWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 135px);
`
export const ChatHeader = styled.div`
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    background-color: ${(props) => props.theme.color.secondary};
    border-radius: 18px 18px 0 0;

    box-shadow: 0 7px 5px #23333c;
`

export const ChatHeaderText = styled.h1`
    font-size: 20px;
    color: ${(props) => props.theme.color.text};
    font-family: ${(props) => props.theme.font.regular};
    font-weight: 400;
`

export const ChatHeaderButton = styled.img`
    margin: 10px;
    right: 20px;
`

export const ChatMessagesContainer = styled.div`
    padding-right: 200px;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    width: calc(100% - 200px);

    &::-webkit-scrollbar {
        display: none;
    }
`
