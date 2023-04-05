import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.palette.common.background};
  padding: 1rem;
  -webkit-app-region: drag;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  user-select: none;
  color: ${({ theme }) => theme.palette.common.text};

  :hover {
    color: ${({ theme }) => theme.palette.common.default};
  }
`;

export const ContainerProgress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.text};
  gap: 1rem;
`;

export const ProgressBar = styled.progress`
  height: 30px;
  width: 100%;
  border-radius: 0;

  ::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.palette.common.primary};
  }

  ::-webkit-progress-value {
    background: ${({ theme }) => theme.palette.common.default};
  }

  :hover {
    ::-webkit-progress-value {
      background: ${({ theme }) => theme.palette.common.defaultHover};
    }
  }
`;
