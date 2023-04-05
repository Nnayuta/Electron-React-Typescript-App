import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.common.text};

  h1 {
    margin-bottom: 3rem;
  }
`;

export const WrapperPDVInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WrapperButtonConnect = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 2rem;
`;

export const ContainerData = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 2rem;
`;

export const WrapperPDVPing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  width: 50%;
`;
