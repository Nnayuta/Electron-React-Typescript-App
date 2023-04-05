/* eslint-disable import/no-unresolved */
import React from "react";
import { Users } from "./Components/Users";
import * as S from "./styles";

export const Admin: React.FC = () => {
  return (
    <S.Container>
      <h1>Administração</h1>
      <S.ContainerMenu>
        <button>Usuarios</button>
      </S.ContainerMenu>
      <S.Content>
        <Users />
      </S.Content>
    </S.Container>
  );
};
