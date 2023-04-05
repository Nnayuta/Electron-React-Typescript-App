import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.common.primary};
  -webkit-app-region: drag;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.common.text};
  z-index: 999;

  .close {
    :hover {
      background-color: #f80a0a;
    }
  }
`;

export const WindowButton = styled.button`
  -webkit-app-region: none;
  border: none;
  height: 100%;
  width: 50px;
  color: ${({ theme }) => theme.palette.common.text};
  background-color: ${({ theme }) => theme.palette.common.primary};

  :hover {
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
    cursor: pointer;
  }

  :disabled {
    background-color: ${({ theme }) => theme.palette.common.defaultDisabled};
    cursor: not-allowed;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  margin-left: 10px;
  font-weight: bold;
`;
