import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.common.default};
  padding: 0.5rem;
  user-select: none;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
  }

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.common.text};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Switch = styled.div`
  display: flex;
  color: ${({ theme }) => theme.palette.common.text};
  width: 2rem;
`;
