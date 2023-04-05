import styled from "styled-components";

export const Container = styled.section`
  background-color: #1b1f27;
  overflow: hidden;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181920;
  width: 355px;
  height: 320px;
  padding: 35px;
  border-radius: 10px;
`;
export const ContainerLogo = styled.div`
  display: flex;
  height: 100px;
  font-size: 50px;
  color: #fefefe;
  user-select: none;
  font-weight: bold;

  :hover {
    color: ${({ theme }) => theme.palette.common.default};
  }
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;
export const InputArea = styled.input`
  width: 100%;
  background-color: #4e4e53;
  border: none;
  height: 45px;
  outline: none;
  border-radius: 8px;
  color: #cbd0f7;
  padding-left: 10px;

  ::placeholder {
    color: #cbd0f7;
    font-size: 14px;
    user-select: none;
  }
`;

export const LoginButton = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.common.default};
  font-size: 16px;
  border: none;
  height: 45px;
  border-radius: 8px;
  color: #cbd0f7;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 16px;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.palette.common.defaultDisabled};
  }
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #ff0000;
  font-size: 14px;
  font-weight: bold;

  text-align: center;
`;
