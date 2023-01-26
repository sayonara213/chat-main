import styled from 'styled-components'

export const NavbarWrap = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 60px;
`
export const LogoWrap = styled.div``
export const Logo = styled.img`
    object-fit: cover;
`
export const NavbarButtonsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
export const NavbarButton = styled.img`
    margin-bottom: 20px;

    object-fit: cover;
    width: 35px;
    height: 35px;
    transition: 200ms ease-in-out;

    cursor: pointer;
    &.settings {
        &:hover {
            transform: rotate(180deg) scale(120%);
        }
    }
    &.sign-out {
        &:hover {
            transform: scale(120%);
        }
    }
`
