import styled from 'styled-components'

export const TransparentContainer = styled.div`
    z-index: 3;

    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
`
