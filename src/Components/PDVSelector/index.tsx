import React, { useEffect } from "react";
import Select from "react-select";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { store } from "../../store/store.redux";

// eslint-disable-next-line import/no-unresolved
import { IPDV } from "@/@types/pdv";
import { set } from "@/store/pdv.redux";

interface OptionsProps {
  value: number | string;
  label: string;
}

export const PDVSelector: React.FC = () => {
  const { STORE_KEY } = useSelector(store);
  const dispatch = useDispatch();

  const { data, isLoading } = useSWR<IPDV[]>(["pdv:findByStoreKEY", STORE_KEY]);

  useEffect(() => {
    if (data) {
      dispatch(set(data[0]));
    }
  }, [data]);

  const onChangePDV = (e: OptionsProps) => {
    const selected = data.filter((store) => store.POS_IP === e.value).shift();
    dispatch(set(selected));
  };

  const options: OptionsProps[] = data?.map((str) => {
    return {
      value: str.POS_IP,
      label: `[ ${str.POS_NUMBER} ] ${str.POS_IP} - ${
        str.Ping.alive ? "Online" : "Offline"
      }`,
    };
  });

  return (
    <S.SelectCustom>
      {!options && (
        <Select
          placeholder={"Carregando lista de PDVs..."}
          isLoading={isLoading}
          isDisabled={true}
        />
      )}
      {options && (
        <Select
          options={options}
          defaultValue={options[0]}
          placeholder={"Selecione o PDV"}
          onChange={onChangePDV}
        />
      )}
    </S.SelectCustom>
  );
};
