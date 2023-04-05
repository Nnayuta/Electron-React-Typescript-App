import React, { useContext } from "react";
import * as S from "./styles";

import { AuthContext } from "../../contexts/AuthContext";

export const Login: React.FC = () => {
  const { onSignIn, error, loading } = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    onSignIn({ username, password });
  };

  return (
    <S.Container>
      <S.WrapperLogin>
        <S.ContainerLogo>CSPDV</S.ContainerLogo>
        <S.LoginForm onSubmit={handleSubmit}>
          {error && <S.Error>{error}</S.Error>}
          <S.InputArea
            type="text"
            name="username"
            placeholder="Digite seu usuario"
            autoFocus
          />
          <S.InputArea
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <S.LoginButton disabled={loading} type="submit" value="Entrar" />
        </S.LoginForm>
      </S.WrapperLogin>
    </S.Container>
  );
};
