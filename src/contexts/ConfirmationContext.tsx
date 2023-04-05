import { createContext, useState } from "react";

import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ConfirmationOverlay = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.common.background};
  color: ${({ theme }) => theme.palette.common.text};

  h1 {
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.common.default};
  color: ${({ theme }) => theme.palette.common.white};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background-color: ${({ theme }) => theme.palette.common.defaultHover};
  }
`;

export const MessageContainer = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const CancelButton = styled(Button)`
  background-color: #ff0000;
  :hover {
    background-color: #ad0202;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

interface ConfirmationContextTypes {
  createConfirmation: ({}: createConfirmationTypes) => void;
}

interface ConfirmationProviderProps {
  children: React.ReactNode;
}

interface confirmationDataTypes {
  id: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

interface createConfirmationTypes {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationContext = createContext<ConfirmationContextTypes>({
  createConfirmation: () => {},
});

export const ConfirmationProvider: React.FC<ConfirmationProviderProps> = ({
  children,
}) => {
  const [confirmationData, setConfirmationData] =
    useState<confirmationDataTypes>(null);

  const createConfirmation = ({
    message,
    onCancel,
    onConfirm,
  }: createConfirmationTypes) => {
    const id = Math.random().toString(36);

    const onHandleConfirm = () => {
      onConfirm();
      setConfirmationData(null);
    };

    const onHandleCancel = () => {
      onCancel();
      setConfirmationData(null);
    };

    setConfirmationData({
      id,
      message,
      onCancel: onHandleCancel,
      onConfirm: onHandleConfirm,
    });
  };

  return (
    <ConfirmationContext.Provider value={{ createConfirmation }}>
      {confirmationData && (
        <ConfirmationContainer className="animate__animated animate__fadeIn">
          <ConfirmationOverlay key={confirmationData.id}>
            <h1>Atenção</h1>
            <MessageContainer>{confirmationData.message}</MessageContainer>
            <WrapperButton>
              <Button onClick={confirmationData.onConfirm}>Confirmar</Button>
              <CancelButton onClick={confirmationData.onCancel}>
                Cancelar
              </CancelButton>
            </WrapperButton>
          </ConfirmationOverlay>
        </ConfirmationContainer>
      )}
      {children}
    </ConfirmationContext.Provider>
  );
};
