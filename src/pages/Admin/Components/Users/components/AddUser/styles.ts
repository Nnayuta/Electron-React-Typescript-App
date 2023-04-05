import styled from "styled-components";

export const Container = styled.div``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181920;
  width: 355px;
  height: 320px;
  padding: 35px;
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;
`;

export const InputArea = styled.input`
  width: 100%;
  background-color: #4e4e53;
  border: none;
  height: 45px;
  outline: none;
  color: #cbd0f7;
  padding-left: 10px;

  :disabled {
    opacity: 0.5;
  }

  ::placeholder {
    color: #cbd0f7;
    font-size: 14px;
    user-select: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  background-color: #4e4e53;
  border: none;
  height: 45px;
  outline: none;
  color: #cbd0f7;
  padding-left: 10px;

  :disabled {
    opacity: 0.5;
  }

  ::placeholder {
    color: #cbd0f7;
    font-size: 14px;
    user-select: none;
  }

  option {
    color: #cbd0f7;
    background-color: #4e4e53;
  }
`;

export const Label = styled.label`
  color: #cbd0f7;
  font-size: 14px;
  user-select: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #4e4e53;
  border: none;
  border-radius: 5px;
  color: #cbd0f7;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: #6e6e73;
  }
`;
