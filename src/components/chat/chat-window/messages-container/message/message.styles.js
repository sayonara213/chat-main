import styled from 'styled-components'

export const MessageContainer = styled.div`
    position: relative;
    margin: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
`
export const MessageText = styled.p`
    font-family: 'regular', serif;
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.6;
    user-select: text;
    white-space: pre-line;
`

export const MessageDateWrap = styled.div``

export const MessageDate = styled.p`
    margin-left: 10px;
    line-height: 1.6;
    font-family: 'regular', serif;
    color: ${(props) => props.theme.color.time};
    font-size: ${(props) => props.theme.fontSize.small};
`

export const AbsoluteContainer = styled.div`
    position: absolute;
    bottom: 0;
`
export const AvatarWrap = styled.div`
    width: 30px;
    margin: 0;
    bottom: 0;
`

export const MessageWrap = styled.div`
    overflow-wrap: break-word;

    padding: 10px;
    width: fit-content;
    height: fit-content;
    margin-left: 5px;

    position: relative;
    display: flex;
    flex-direction: row;

    border-radius: 10px 10px 10px 0;
    background-color: ${(props) =>
        props.author ? props.theme.color.secondary : props.theme.color.primary};
`
