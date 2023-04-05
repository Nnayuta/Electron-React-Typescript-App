import styled from "styled-components";

export const SideButton = styled.li<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.default};
  color: white;
  height: 30px;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
  }

  * {
    color: white;
    text-decoration: none;
  }

  ${({ isActive }) =>
    isActive && {
      opacity: 0.5,
      pointerEvents: "none",
    }}
`;
