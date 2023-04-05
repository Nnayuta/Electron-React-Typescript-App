import React, { useEffect } from "react";
import Select from "react-select";
import * as S from "./styles";

import { useDispatch } from "react-redux";
import { set } from "../../store/store.redux";

import useSWR from "swr";

// eslint-disable-next-line import/no-unresolved
import { storefindManyType } from "../../@types/store.findMany";

interface OptionsProps {
  value: number;
  label: string;
}

export const StoreSelector: React.FC = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useSWR<storefindManyType[]>(["store:findMany"]);

  useEffect(() => {
    if (data) {
      dispatch(set(data[0]));
    }
  }, [data]);

  const options: OptionsProps[] = data?.map((str) => {
    return {
      value: str.STORE_KEY,
      label: `[ ${str.STORE_KEY.toString().padStart(4, "0")} ] ${
        str.STORE_NAME
      }`,
    };
  });

  const onChangeStore = (e: OptionsProps) => {
    const storeSelected = data
      .filter((store) => store.STORE_KEY === e.value)
      .shift();

    dispatch(set(storeSelected));
  };

  return (
    <S.Container>
      <label>Loja</label>
      <S.SelectCustom>
        {options && (
          <Select
            options={options}
            placeholder={!isLoading ? "Selecione a Loja" : "Loading..."}
            defaultValue={options[0]}
            onChange={onChangeStore}
          />
        )}
      </S.SelectCustom>
    </S.Container>
  );
};
