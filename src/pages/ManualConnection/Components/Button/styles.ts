import styled from "styled-components";

export const ConnectButton = styled.button`
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
