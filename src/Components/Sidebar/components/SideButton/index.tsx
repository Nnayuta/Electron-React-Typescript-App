import React from "react";
import * as S from "./styles";

interface SideButtonProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
  permToDisplay: boolean;
  children: React.ReactNode;
}

export const SideButton: React.FC<SideButtonProps> = ({
  title,
  children,
  isActive,
  onClick,
  permToDisplay,
}) => {
  if (!permToDisplay) return null;

  return (
    <S.SideButton title={title} onClick={onClick} isActive={isActive}>
      {children}
    </S.SideButton>
  );
};
