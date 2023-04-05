import {
  Crown,
  Gear,
  Info,
  Monitor,
  Phone,
  SignOut,
  TerminalWindow,
} from "phosphor-react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SideButton } from "./components/SideButton";
import * as S from "./styles";

import { PageWithPermLevel } from "@/@types/pages";
import useSWR from "swr";

interface SideBarProps {
  onChangePage: (page: string) => void;
  currentPage: string;
}

export const Sidebar: React.FC<SideBarProps> = ({
  onChangePage,
  currentPage,
}) => {
  const { user, onLogout } = useContext(AuthContext);
  const IconSize = "90%";

  const { data, isLoading } = useSWR<PageWithPermLevel[]>(["pages:get"]);

  const permitedPages = (pageName: string) => {
    if (!data) return false;
    const page = data.find((page) => page.name === pageName);
    if (!page) return false;
    const perm = page.PermLevel.find((perm) => perm.id === user?.PermLevel.id);
    if (!perm) return false;
    return true;
  };

  if (isLoading) return <div>Carregando...</div>;

  return (
    <S.Sidebar>
      <ul>
        <SideButton
          onClick={() => onChangePage("Automation")}
          isActive={currentPage === "Automation"}
          title="Funções Automatizadas"
          permToDisplay={permitedPages("Automation")}
        >
          <Monitor size={IconSize} />
        </SideButton>

        <SideButton
          onClick={() => onChangePage("ManualConnection")}
          isActive={currentPage === "ManualConnection"}
          title="Conexão Manual"
          permToDisplay={permitedPages("ManualConnection")}
        >
          <TerminalWindow size={IconSize} />
        </SideButton>

        <SideButton
          onClick={() => onChangePage("Voips")}
          isActive={currentPage === "Voips"}
          title="Lista de Voips"
          permToDisplay={permitedPages("Voips")}
        >
          <Phone size={IconSize} />
        </SideButton>

        <SideButton
          onClick={() => onChangePage("StoreInfo")}
          isActive={currentPage === "StoreInfo"}
          title="Informações da Loja"
          permToDisplay={permitedPages("StoreInfo")}
        >
          <Info size={IconSize} />
        </SideButton>

        <SideButton
          onClick={() => onChangePage("Config")}
          isActive={currentPage === "Config"}
          title="Configurações"
          permToDisplay={permitedPages("Config")}
        >
          <Gear size={IconSize} />
        </SideButton>

        <SideButton
          onClick={() => onChangePage("Admin")}
          isActive={currentPage === "Admin"}
          title="Area Administrativa"
          permToDisplay={user?.isAdmin}
        >
          <Crown size={IconSize} />
        </SideButton>
      </ul>

      <S.UserContainer>
        <label>{user?.username}</label>
        <S.Button onClick={onLogout}>
          <SignOut />
        </S.Button>
      </S.UserContainer>
    </S.Sidebar>
  );
};
