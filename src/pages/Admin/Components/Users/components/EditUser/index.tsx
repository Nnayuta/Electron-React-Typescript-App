import { UsersFindMany } from "@/@types/user";
import { Switch } from "@/Components/Defaults/Switch";
import { AuthContext } from "@/contexts/AuthContext";
import { NotificationContext } from "@/contexts/NotificationContext";
import { PermLevel } from "@prismaGenerated/cspdv";
import { ipcRenderer } from "electron";
import React, { useContext, useState } from "react";
import useSWR from "swr";

import * as S from "./styles";

interface IEditUserProps {
  user: UsersFindMany;
  closeModal: () => void;
}

export const EditUser: React.FC<IEditUserProps> = ({ user, closeModal }) => {
  const { showNotification, updateNotification } =
    useContext(NotificationContext);

  const { user: userLogged } = useContext(AuthContext);

  const [username, setUsername] = useState(user.username);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [permLevel, setPermLevel] = useState(user.permLevelID);

  const authToken = localStorage.getItem("token");
  const { data: PermLevelData } = useSWR<PermLevel[]>(["permlevel:get"]);

  const handleEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (!userLogged.isAdmin) return;

      if (user.isAdmin) {
        showNotification({
          message: "Você não pode alterar a permissão de um administrador",
          type: "error",
          toastId: "editUser",
        });
        setIsAdmin(user.isAdmin);
        return;
      }

      if (
        user.username === username &&
        user.isAdmin === isAdmin &&
        user.permLevelID === permLevel
      ) {
        showNotification({
          message: "Nenhuma alteração foi feita",
          type: "info",
          toastId: "editUser",
        });
        closeModal();
        return;
      }

      showNotification({
        message: "Editando usuário...",
        type: "loading",
        toastId: "updateUser",
      });

      const { error } = await ipcRenderer.invoke("user:edit", {
        user: {
          id: user.id,
          username,
          isAdmin,
          permLevelID: permLevel,
        },
        authToken,
      });

      if (error) {
        updateNotification({
          message: error,
          toastId: "updateUser",
          type: "error",
        });
        return;
      }

      updateNotification({
        message: "Usuário editado com sucesso",
        toastId: "updateUser",
        type: "success",
      });

      closeModal();
    } catch (error) {}
  };

  return (
    <S.Container>
      <S.FormContainer>
        <h1>Editar Usuario</h1>
        <S.Form onSubmit={handleEditUser}>
          <S.InputContainer>
            <S.Label htmlFor="name">Usuário</S.Label>
            <S.InputArea
              type="text"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={userLogged.username === user.username}
              placeholder="Usuário"
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.Label htmlFor="name">Administrador</S.Label>
            <Switch
              handleClick={() => setIsAdmin((e) => !e)}
              isChecked={isAdmin}
              isDisabled={userLogged.username === user.username}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.Label htmlFor="name">Permissão</S.Label>
            <S.Select
              onChange={(e) => setPermLevel(Number(e.target.value))}
              value={permLevel}
            >
              {PermLevelData?.map((perm) => (
                <option key={perm.id} value={perm.id}>
                  {perm.name}
                </option>
              ))}
            </S.Select>
          </S.InputContainer>
          <S.ButtonContainer>
            <S.Button type="submit">Salvar</S.Button>
            <S.Button onClick={closeModal} type="button">
              Cancelar
            </S.Button>
          </S.ButtonContainer>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
};
