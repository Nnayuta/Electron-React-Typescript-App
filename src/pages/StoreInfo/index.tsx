/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

import { store } from '../../store/store.redux';

export const StoreInfo: React.FC = () => {

  const data = useSelector(store);

  return (
    <S.Container>
      <h1>Informações da Loja</h1>
      <S.WrapperStoreInfo>
        <S.Separator>
          <S.WrapperStoreInfoContent>
            <label>Nome</label>
            <p>{data.STORE_NAME}</p>
          </S.WrapperStoreInfoContent>
          <S.WrapperStoreInfoContent>
            <div>
              <label>Tipo</label>
              <p>{data.TYPE.NAME}</p>
            </div>
            <div>
              <label>Canal</label>
              <p>{data.CHANNEL.CHANNEL_NUMBER} - {data.CHANNEL.NAME}</p>
            </div>
          </S.WrapperStoreInfoContent>
          <S.WrapperStoreInfoContent>
            <label>Regional</label>
            <p>{data.REGION.NAME}</p>
          </S.WrapperStoreInfoContent>
          <S.WrapperStoreInfoContent>
            <label>CNPJ</label>
            <p>{data.STORE_ID}</p>
          </S.WrapperStoreInfoContent>
        </S.Separator>
        <S.Separator>
          <S.WrapperStoreInfoContent>
            <label>Endereço</label>
            <p>{data.STORE_ADDRESS} - {data.STORE_NEIG}</p>
            <p>{data.STORE_CITY} - {data.STORE_STATE}</p>
            <p>{data.STORE_ZIP}</p>
          </S.WrapperStoreInfoContent>
          <S.WrapperStoreInfoContent>
            <label>Telefone</label>
            <p>{data.STORE_PHONE}</p>
          </S.WrapperStoreInfoContent>
          <S.Separator>
            <h3>Suporte de Campo</h3>
            <S.WrapperStoreInfoContent>
              <label htmlFor="">Lider</label>
              <p>{data.SUPPORT_LEADER.NAME}</p>
            </S.WrapperStoreInfoContent>
            <S.WrapperStoreInfoContent>
              <label htmlFor="">Equipe</label>
              <p>{data.SUPPORT.NAME}</p>
            </S.WrapperStoreInfoContent>
          </S.Separator>
        </S.Separator>
      </S.WrapperStoreInfo>
    </S.Container>
  );
};
