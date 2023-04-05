import React, { useState } from "react";
import * as S from "./styles";

import { IConfig } from "@/services/config";

interface IInputProps {
  label: string;
  value: string;
  configName?: keyof IConfig;
}

export const Input: React.FC<IInputProps> = ({ label, value, configName }) => {
  const [inputValue, setInputValue] = useState(value);

  // const { fetch } = useIPC({
  //   ipcName: "config:set",
  //   dataToSend: {
  //     key: configName,
  //     value: inputValue,
  //   },
  //   autoFetch: false,
  // });

  return (
    <S.Container>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={!Boolean(configName)}
      />
    </S.Container>
  );
};
