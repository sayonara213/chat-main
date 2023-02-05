import styled from 'styled-components'

export const ChatListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const GlobalSearchWrap = styled.div`
    margin: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const GlobalSearchText = styled.h2`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 800;
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', serif;
`
