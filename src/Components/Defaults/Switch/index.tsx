import { ToggleLeft, ToggleRight } from "phosphor-react";
import React from "react";
import * as S from "./styles";

interface SwitchProps {
  isChecked: boolean;
  handleClick: () => void;
  isDisabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  isChecked,
  handleClick,
  isDisabled,
}) => {
  return (
    <S.Switch
      isChecked={isChecked}
      isDisabled={isDisabled}
      onClick={handleClick}
    >
      {!isChecked ? (
        <ToggleLeft size={"100%"} />
      ) : (
        <ToggleRight size={"100%"} />
      )}
    </S.Switch>
  );
};
