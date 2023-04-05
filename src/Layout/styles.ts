import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.common.background};
  overflow: hidden;
  padding: 0 1rem 1rem 1rem;
`;

export const WrapperPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin-left: 16px;
  background-color: ${({ theme }) => theme.palette.common.primary};
  overflow: auto;
  padding-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StoreLogo = styled.img`
  width: 100px;
  height: 100px;
`;
