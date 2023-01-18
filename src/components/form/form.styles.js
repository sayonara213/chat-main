import styled from "styled-components";

export const Input =  styled.input`
  background-color: unset;
  border: none;
  font-size: 14px;
  outline: none;
  &:-webkit-autofill{
    -webkit-background-clip: text;
  }
`;

export const InputContainer = styled.div`
  margin: 10px 0;
  
  height: auto;
  width: 100%;
  background-color: #ffffff;
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
  color: #737373;
  
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
  margin: 0 0 10px 0;
  position: relative;
  
  width: 100%;
  height: 50px;
  
  background-color: #FFFFFF;
  font-size: 20px;
  color: #3e4685;
  box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.43);
  
  border: none;
  border-radius: 15px;

  cursor: pointer;
  
  overflow: hidden;

  transition: 150ms ease-in-out;
  &:hover{
    color: ${props => (props.color ? "#c45d5d" : "#FFFFFF")};
    background-color: ${props => (props.color ? "#fdefef" : "#3e4685")};
  }
  
  &:hover:before{
    transform: translateY(0px);
  }
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
  
  background-color: #fdefef;
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #c45d5d;
`;