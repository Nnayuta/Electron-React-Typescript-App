/* eslint-disable import/no-unresolved */
import React from "react";
import * as S from "./styles";

import { IConfig } from "../../services/config";
import { Input } from "./Components/Input";
import { Switch } from "./Components/Switch";

import useSWR from "swr";

export const Config: React.FC = () => {
  const { data, isLoading } = useSWR<IConfig>(["config:get"]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <S.Container>
      <S.Wrapper>
        <h2>Configurações do CSPDV</h2>
        <Switch
          configName="backToThePageAfterClosing"
          label="Volte para onde estava após fechar"
          checked={data?.backToThePageAfterClosing}
          key={"Volte para onde estava após fechar"}
        />
      </S.Wrapper>
      <S.Wrapper>
        <h2>Configurações Basicas</h2>
        <Input
          label="Database PDV"
          value={data?.DB_URL_PDV}
          key={data?.DB_URL_PDV}
        />
        <Input
          label="Database Lojas"
          value={data?.DB_URL_STORE}
          key={data?.DB_URL_STORE}
        />
        <Input
          label="Usuario"
          value={data?.PDV_username}
          key={data?.PDV_username}
        />
        <Input
          label="Senha"
          value={data?.PDV_password}
          key={data?.PDV_password}
        />
      </S.Wrapper>
    </S.Container>
  );
};
