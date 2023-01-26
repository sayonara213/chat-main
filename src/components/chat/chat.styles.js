import styled from 'styled-components'

export const ChatWrap = styled.div`
    padding: 70px 140px;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: row;

    @media (max-width: 992px) {
        padding: 40px 0;
    }
    @media (max-width: 768px) {
        padding: 40px 90px;
    }
    @media (max-width: 576px) {
        padding: 20px 40px;
    }
`
