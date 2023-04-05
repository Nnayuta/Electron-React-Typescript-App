import { ipcRenderer } from "electron";
import { ToggleLeft, ToggleRight } from "phosphor-react";
import React, { useState } from "react";
import { IConfig } from "../../../../services/config";
import * as S from "./styles";

interface SwitchProps {
  checked: boolean;
  label: string;
  configName: keyof IConfig;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  configName,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = async () => {
    setIsChecked(!isChecked);

    await ipcRenderer.invoke("config:set", {
      key: configName,
      value: !isChecked,
    });
  };

  return (
    <S.Container onClick={handleClick}>
      <label>{label}</label>
      <S.Switch>
        {!isChecked ? (
          <ToggleLeft size={"100%"} />
        ) : (
          <ToggleRight size={"100%"} />
        )}
      </S.Switch>
    </S.Container>
  );
};
