import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.common.text};
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: 600;
  }

  input {
    width: 100%;
    background-color: ${({ theme }) => theme.palette.common.default};
    font-size: 16px;
    border: none;
    height: 45px;
    color: #cbd0f7;
    padding-left: 10px;

    :hover {
      background-color: ${({ theme }) => theme.palette.common.defaultHover};
    }

    :disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.palette.common.defaultDisabled};
    }
  }
`;
