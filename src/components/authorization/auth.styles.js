import styled from 'styled-components'

export const PageContainer = styled.div`
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
        height: 100dvh;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.color.background};
`
