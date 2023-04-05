import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import useSWR from "swr";
import { PermLevel, User } from "@prismaGenerated/cspdv";
import { ipcRenderer } from "electron";
import { AuthContext } from "@/contexts/AuthContext";
import { NotificationContext } from "@/contexts/NotificationContext";

interface AddUserProps {
  closeModal: () => void;
}

export const AddUser: React.FC<AddUserProps> = ({ closeModal }) => {
  const [username, setUsername] = useState<string>("");
  const [permLevelID, setPermLevelID] = useState<Number>(1);

  const { data: permLevelData } = useSWR<PermLevel[]>(["permlevel:get"]);

  const { user: userLogged } = useContext(AuthContext);
  const { showNotification, updateNotification } =
    useContext(NotificationContext);

  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!userLogged.isAdmin) {
        showNotification({
          message: "Você não tem permissão para adicionar usuários!",
          type: "error",
          toastId: "add-user",
        });
        return;
      }

      if (!username) {
        showNotification({
          message: "Preencha todos os campos!",
          type: "error",
          toastId: "add-user",
        });
        return;
      }

      if (username.length < 3) {
        showNotification({
          message: "O nome de usuário deve ter no mínimo 3 caracteres!",
          type: "error",
          toastId: "add-user",
        });
        return;
      }

      showNotification({
        message: "Adicionando usuário...",
        type: "loading",
        toastId: "add-user",
      });

      const userAdded: User = await ipcRenderer.invoke("user:add", {
        user: {
          username,
          permLevelID: permLevelID,
        },
        authToken: userLogged.token,
      });

      updateNotification({
        message: `${userAdded.username} adicionado com sucesso!`,
        type: "success",
        toastId: "add-user",
      });
    } catch (error) {
      updateNotification({
        message: error.toString(),
        type: "error",
        toastId: "add-user",
      });
      return;
    } finally {
      closeModal();
    }
  };

  if (!permLevelData) return <div>Carregando...</div>;

  return (
    <S.Container>
      <S.FormContainer>
        <h1>Adicionar Usuário</h1>
        <S.Form onSubmit={handleAddUser}>
          <S.InputContainer>
            <S.Label>Usuário</S.Label>
            <S.InputArea
              type="text"
              value={username}
              placeholder="Nome de usuário"
              onChange={(e) => setUsername(e.target.value)}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.Label>Permissão</S.Label>
            <S.Select
              onChange={(e) => setPermLevelID(Number(e.target.value))}
              value={permLevelID.toString()}
            >
              {permLevelData?.map((perm) => (
                <option key={perm.id} value={perm.id}>
                  {perm.name}
                </option>
              ))}
            </S.Select>
          </S.InputContainer>
          <S.ButtonContainer>
            <S.Button type="submit">Criar</S.Button>
            <S.Button onClick={closeModal} type="button">
              Cancelar
            </S.Button>
          </S.ButtonContainer>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
};
