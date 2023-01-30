import styled from 'styled-components'

export const SideMenuWrap = styled.div`
    padding: 20px;
    margin-right: 25px;

    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(30% - 25px);

    background-color: ${(props) => props.theme.color.dark};
    border-radius: 18px;

    box-shadow: 1px 1px 20px -3px rgba(0, 0, 0, 0.2);
`

export const ChatListSection = styled.div`
    width: calc(100% - 80px);
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const ChatSearchWrap = styled.div`
    margin-bottom: 20px;

    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.color.input};
    border-radius: 8px;
`

export const ChatSearchInput = styled.input`
    padding: 0;
    width: 95%;

    border: none;
    outline: none;
    background-color: unset;
    color: ${(props) => props.theme.color.background};
    font-family: 'regular', serif;
    &::placeholder {
        color: ${(props) => props.theme.color.background};
    }

    resize: none;
`
