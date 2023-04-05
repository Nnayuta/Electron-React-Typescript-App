import { ipcRenderer } from "electron";
import { Cards, Minus, X } from "phosphor-react";
import React from "react";
import * as S from "./styles";

export const Window: React.FC = () => {
  const handleMinimize = async () => {
    await ipcRenderer.invoke("minimize");
  };

  const handleMaximize = async () => {
    await ipcRenderer.invoke("maximize");
  };

  const handleClose = async () => {
    await ipcRenderer.invoke("close");
  };

  return (
    <S.Container>
      <S.ContainerLogo>CSPDV</S.ContainerLogo>
      <div />
      <div>
        <S.WindowButton onClick={handleMinimize}>
          <Minus size={25} />
        </S.WindowButton>
        <S.WindowButton onClick={handleMaximize}>
          <Cards size={25} />
        </S.WindowButton>
        <S.WindowButton className="close" onClick={handleClose}>
          <X size={25} />
        </S.WindowButton>
      </div>
    </S.Container>
  );
};
