import { UsersFindMany } from "@/@types/user";
import { AuthContext } from "@/contexts/AuthContext";
import { ConfirmationContext } from "@/contexts/ConfirmationContext";
import { ModalContext } from "@/contexts/ModalContext";
import { NotificationContext } from "@/contexts/NotificationContext";
import { ipcRenderer } from "electron";
import { Pencil, ToggleLeft, ToggleRight, Trash } from "phosphor-react";
import React, { useContext, useState } from "react";
import useSWR from "swr";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import * as S from "./styles";

export const Users: React.FC = () => {
  const { showNotification, updateNotification } =
    useContext(NotificationContext);

  const { user: userLogged } = useContext(AuthContext);
  const { createConfirmation } = useContext(ConfirmationContext);
  const { openModal, closeModal } = useContext(ModalContext);

  const { data, mutate, isLoading } = useSWR<UsersFindMany[]>(["get:users"]);

  const [search, setSearch] = useState<string>("");
  const filteredData = data?.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (user: UsersFindMany) => {
    if (!user) return;

    if (user.id === userLogged?.id) {
      showNotification({
        message: `Você não pode deletar seu próprio usuário!`,
        type: "error",
        toastId: "delete-user",
      });
      return;
    }

    if (user.isAdmin) {
      showNotification({
        message: `Você não pode deletar um usuário administrador!`,
        type: "error",
        toastId: "delete-user",
      });
      return;
    }

    if (!userLogged.isAdmin) {
      showNotification({
        message: `Você não tem permissão para deletar usuários!`,
        type: "error",
        toastId: "delete-user",
      });
      return;
    }

    createConfirmation({
      message: `Você tem certeza que deseja deletar o usuário ${user.username}?`,
      onConfirm: () => handleDeleteConfirm(user),
      onCancel: () => {},
    });

    const handleDeleteConfirm = async (user: UsersFindMany) => {
      showNotification({
        message: `Deletando usuário ${user.username}...`,
        type: "loading",
        toastId: "delete-user",
      });

      const token = localStorage.getItem("token");

      await ipcRenderer.invoke("user:delete", {
        userId: user.id,
        authToken: token,
      });

      updateNotification({
        message: `Usuário ${user.username} deletado com sucesso!`,
        type: "success",
        toastId: "delete-user",
      });

      await mutate();
    };
  };

  const onHandleCloseModal = () => {
    closeModal();
    mutate();
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <S.Container>
      <S.TableContainer>
        <S.TableController>
          <S.InputSearch
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder={"Buscar usuario"}
          />
          <S.Button
            onClick={() => {
              openModal(<AddUser closeModal={onHandleCloseModal} />);
            }}
          >
            Novo Usuario
          </S.Button>
        </S.TableController>
        <S.Table>
          <S.TableHeader>
            <S.TableRow>
              <S.TableHeaderColumn>Usuario</S.TableHeaderColumn>
              <S.TableHeaderColumn>Administrador</S.TableHeaderColumn>
              <S.TableHeaderColumn>Permissão</S.TableHeaderColumn>
              <S.TableHeaderColumn>Criado em</S.TableHeaderColumn>
              <S.TableHeaderColumn>Atualizado em</S.TableHeaderColumn>
              <S.TableHeaderColumn></S.TableHeaderColumn>
            </S.TableRow>
          </S.TableHeader>
          <S.TableBody>
            {filteredData?.map((user) => (
              <S.TableRow key={user.id}>
                <S.TableData>{user.username}</S.TableData>
                <S.TableData
                  title={
                    user.isAdmin
                      ? "Este usuário é um administrador."
                      : "Este usuário não é um administrador."
                  }
                >
                  {user.isAdmin ? (
                    <ToggleRight color="green" size={32} />
                  ) : (
                    <ToggleLeft color="red" size={32} />
                  )}
                </S.TableData>
                <S.TableData>{user.PermLevel?.name}</S.TableData>
                <S.TableData>{user.createdAt.toLocaleDateString()}</S.TableData>
                <S.TableData>{user.updatedAt.toLocaleDateString()}</S.TableData>
                <S.TableData className="actions">
                  <S.ActionsContainer>
                    <S.ActionButton
                      onClick={() => {
                        openModal(
                          <EditUser
                            closeModal={onHandleCloseModal}
                            user={user}
                          />
                        );
                      }}
                    >
                      <Pencil size={"100%"} />
                    </S.ActionButton>
                    <S.ActionButton
                      onClick={() => {
                        handleDelete(user);
                      }}
                    >
                      <Trash color="red" size={"100%"} />
                    </S.ActionButton>
                  </S.ActionsContainer>
                </S.TableData>
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </S.TableContainer>
    </S.Container>
  );
};
