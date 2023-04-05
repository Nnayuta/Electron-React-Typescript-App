import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.common.text};
`;

export const WrapperStoreInfo = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const WrapperStoreInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.palette.common.text};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.common.text};
  }
`;