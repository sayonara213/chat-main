import styled from "styled-components";

export const Input = styled.input`
  background-color: unset;
  border: none;
  font-size: 14px;
  outline: none;
  width: 90%;
  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  font-family: ${props => props.theme.font.bold};
  color: ${props => props.theme.color.textSecondary};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${props => props.theme.color.textSecondary};
  }
  &::placeholder {
    color: ${props => props.theme.color.textSecondary};
  }
`;

export const InputContainer = styled.div`
  margin: 10px 0;

  height: auto;
  width: 100%;
  background-color: ${props => props.theme.color.primary};
  border-radius: 15px;
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.43);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: relative;
  overflow: hidden;
`;

export const InputText = styled.p`
  margin: 20px 15px 10px 15px;
  font-size: 18px;
  font-family: ${props => props.theme.font.bold};
  color: ${props => props.theme.color.textSecondary};
  user-select: none;

`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15px 20px 15px;
`;

export const InputIcon = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;

  object-fit: cover;
`;

export const LoginButton = styled.button`
  margin: 0 5px 10px 0;
  position: relative;
  
  width: 100%;
  height: 50px;

  background-color: ${props => props.theme.color.primary};
  font-size: 18px;
  color: ${props => props.theme.color.textSecondary};
  box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.43);

  border: none;
  border-radius: 15px;

  cursor: pointer;
  
  transition: 150ms ease-in-out;

  &:hover {
    color: ${props => (props.color ? "#c45d5d" : "#FFFFFF")};
    background-color: ${props => (props.color ? "#fdefef" : "#3e4685")};
  }

  &:hover:before {
    transform: translateY(0px);
  }

  font-family: ${props => props.theme.font.bold};
`;

export const InputForm = styled.form`
  margin: 0;
  width: 100%;

`;

export const ErrorWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  width: 100%;
  height: 18px;
  justify-content: center;
  align-items: center;

  background-color: #fdefef;
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #c45d5d;
  font-family: ${props => props.theme.font.bold};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonImage = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;