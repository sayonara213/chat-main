import styled from 'styled-components'

export const ToolsWrap = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    bottom: 0;
`

export const ToolsList = styled.div`
    z-index: 3;

    position: absolute;
    top: ${(props) => props.pos.y}px;
    left: ${(props) => props.pos.x}px;

    width: 120px;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: ${(props) => props.theme.color.dark};
    border-radius: 5px;
    overflow: hidden;
`

export const ToolsItemWrap = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #2b6065;
    }
`

export const ToolsItem = styled.p`
    margin: 0 10px;
    width: 100%;
    font-family: 'regular', serif;
    color: ${(props) => props.theme.color.text};
`
