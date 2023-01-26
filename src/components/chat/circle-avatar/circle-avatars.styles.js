import styled from 'styled-components'

export const AvatarWrap = styled.div`
    margin: 0;

    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
`

export const Avatar = styled.img`
    margin: 0;

    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;

    border-radius: 50%;
`
