import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 300px;
  height: auto;
  padding: 25px;
  background-color: #f1f7fe; //f1f7fe
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  box-shadow: 0 5px 20px #000000;
`;

export const LoginImage = styled.img`
  width: 60%;
  height: auto;
`;

export const OtherButtonsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const OtherButton = styled.a`
  font-size: 14px;
  color: #282c34;
`;
