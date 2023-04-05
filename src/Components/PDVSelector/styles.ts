import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const SelectCustom = styled.div`
  width: 80%;
  color: ${({ theme }) => theme.palette.common.black};
`;
