import React, { useEffect } from "react";
import * as S from "./styles";

import { ipcRenderer } from "electron";
import { useSelector } from "react-redux";
import { PDVSelector } from "../../Components/PDVSelector";
import { pdv } from "../../store/pdv.redux";
import { Button } from "./Components/Button";
import { store } from "../../store/store.redux";
import { CloudArrowDown, CloudArrowUp } from "phosphor-react";

export const ManualConnection: React.FC = () => {
  const pdvData = useSelector(pdv);
  const { STORE_KEY } = useSelector(store);

  const handleConnect = async () => {
    await ipcRenderer.invoke("manualConnection", pdvData);
  };

  if (!pdvData) return <></>;

  return (
    <S.Container key={STORE_KEY}>
      <h1>Conexão Manual</h1>
      <PDVSelector />
      <S.ContainerData>
        <S.WrapperPDVInfo>
          <div>
            <label>Nome</label>
            <p>{pdvData.POS_NAME}</p>
          </div>
          <div>
            <label>Impressora</label>
            <p>
              {pdvData.ECF_MANUFACTURER} - {pdvData.ECF_MODEL}
            </p>
          </div>
          <div>
            <label htmlFor="">Versão</label>
            <p>{pdvData.POS_VERSION}</p>
          </div>
        </S.WrapperPDVInfo>
        <S.WrapperPDVPing>
          <div>
            <label>Status</label>
            {pdvData?.Ping?.alive ? (
              <div title="PDV Online">
                <CloudArrowUp size={32} />
              </div>
            ) : (
              <div title="PDV Offline">
                <CloudArrowDown size={32} />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="">Ping</label>
            <p>
              {pdvData?.Ping?.time !== "unknown" ? pdvData?.Ping?.time : "?"} ms
            </p>
          </div>
        </S.WrapperPDVPing>
      </S.ContainerData>
      <S.WrapperButtonConnect>
        <Button enabled={pdvData?.Ping?.alive} handleConnect={handleConnect}>
          Conectar
        </Button>
      </S.WrapperButtonConnect>
    </S.Container>
  );
};
