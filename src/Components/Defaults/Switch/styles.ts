import styled from "styled-components";

export const Switch = styled.div<{ isDisabled: boolean; isChecked: boolean }>`
  display: flex;
  width: 100%;
  height: 3rem;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  ${({ isDisabled }) => isDisabled && `opacity: 0.5; pointer-events: none;`}

  ${({ isChecked }) => (isChecked ? `color: green` : `color: red`)}
`;
