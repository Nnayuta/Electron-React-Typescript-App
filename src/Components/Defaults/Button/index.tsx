import React from "react";
import * as S from "./styles";

interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  return <S.Button onClick={handleClick}>{children}</S.Button>;
};
