import styled from 'styled-components'

export const UserItemWrap = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 10px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${(props) =>
        props.current
            ? props.theme.color.secondary
            : props.theme.color.primary};

    &:hover {
        background-color: #2e6970;
    }
`
export const ChatListItemAvatarWrap = styled.div``
export const UserItemInfoWrap = styled.div`
    margin-left: 15px;

    width: calc(100% - 80px);
`
export const UserName = styled.h2`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 800;
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', serif;
`
export const ChatListItemLastMessage = styled.p`
    display: inline-block;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    width: 100%;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 400;
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', serif;
`

export const ChatListItemPlaceholder = styled.div`
    margin-bottom: 10px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 10px;

    transition: background-color 0.2s ease-in-out;

    background-color: ${(props) => props.theme.color.primary};
`
