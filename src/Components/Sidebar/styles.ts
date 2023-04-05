import styled from "styled-components";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  width: 80px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.common.primary};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 8px;
    user-select: none;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.palette.common.white};
  text-transform: uppercase;

  label {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

export const Button = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.default};
  color: white;
  height: 30px;
  user-select: none;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
  }
`;
