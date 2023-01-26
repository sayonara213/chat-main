import styled from 'styled-components'

export const ChatWindowWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    background-color: ${(props) => props.theme.color.dark};
    border-radius: 18px;

    box-shadow: 1px 1px 20px -3px rgba(0, 0, 0, 0.2);
`
