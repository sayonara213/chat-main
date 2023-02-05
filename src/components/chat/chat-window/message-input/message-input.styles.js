import styled from 'styled-components'

export const MessageInputWrap = styled.div`
    position: relative;

    margin: 20px;
    padding: 7px 0;
    width: calc(100% - 40px);
    height: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -20px 20px #23333c;
`

export const ButtonIcon = styled.img`
    margin: 10px;

    z-index: 3;

    width: auto;
    height: auto;

    cursor: pointer;
`

export const TextareaWrap = styled.div`
    z-index: 2;

    padding: 10px 0;
    width: 100%;
    max-height: 300px;

    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.color.input};
    border-radius: 8px;

    textarea {
        max-height: 300px;
        margin: 0 40px;
        padding: 0;
        width: 90%;

        white-space: pre-line;
        border: none;
        outline: none;

        background-color: unset;
        color: ${(props) => props.theme.color.background};
        font-family: 'regular', serif;
        font-size: ${(props) => props.theme.fontSize.small};

        resize: none;

        &::placeholder {
            color: ${(props) => props.theme.color.background};
        }

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 8px;
            background-color: ${(props) => props.theme.color.primary};
            border: 1px solid ${(props) => props.theme.color.input};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: ${(props) => props.theme.color.secondary};
        }
    }
`
export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const EditMessageWrap = styled.div`
    /*    padding-bottom: 6px;*/

    position: absolute;
    top: -36px;

    display: flex;
    width: 100%;
    height: 30px;

    align-items: center;

    background-color: ${(props) => props.theme.color.input};
    border-radius: 8px;
`

export const EditMessageText = styled.p`
    margin: 0 10px;

    font-family: 'regular', serif;
    font-size: ${(props) => props.theme.fontSize.small};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
