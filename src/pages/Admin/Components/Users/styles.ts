import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TableController = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.common.black};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.common.default};
  color: ${({ theme }) => theme.palette.common.white};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
  }
`;

export const Table = styled.table`
  flex: 1;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.palette.common.black};
  width: 100%;
`;

export const TableHeaderColumn = styled.th`
  padding: 8px;
  text-align: center;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.palette.common.background};

  .actions {
    display: flex;
    justify-content: space-between;
    width: 100px;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.palette.common.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.secondary};
  }
`;

export const TableData = styled.td`
  justify-content: center;
  padding: 4px;
  text-align: center;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 30px;

  color: ${({ theme }) => theme.palette.common.default};

  :hover {
    color: ${({ theme }) => theme.palette.common.black};
  }
`;

export const InputSearch = styled.input`
  width: 40%;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
`;
