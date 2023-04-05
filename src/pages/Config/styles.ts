import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.common.text2};
    margin-bottom: 1rem;
    text-transform: uppercase;
    user-select: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
  gap: 1rem;
`;
