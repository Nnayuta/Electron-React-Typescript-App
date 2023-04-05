import React from "react";
import * as S from "./styles";

interface ButtonProps {
  handleConnect: () => void;
  children: React.ReactNode;
  enabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  handleConnect,
  children,
  enabled,
}) => {
  return (
    <S.ConnectButton disabled={!enabled} onClick={handleConnect}>
      {children}
    </S.ConnectButton>
  );
};
