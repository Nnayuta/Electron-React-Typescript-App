import { createContext } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface showNotificationProps {
  toastId: string;
  message: string;
  type: "error" | "success" | "info" | "warning" | "default" | "loading";
}

interface updateNotificationProps {
  toastId: string;
  message: string;
  type: "info" | "success" | "warning" | "error" | "default";
}

interface NotificationContextType {
  showNotification: ({ message, type, toastId }: showNotificationProps) => void;
  updateNotification: ({
    message,
    type,
    toastId,
  }: updateNotificationProps) => void;
}

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationContext = createContext<NotificationContextType>({
  showNotification({}) {},
  updateNotification({}) {},
});

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const showNotification = ({
    message,
    type,
    toastId,
  }: showNotificationProps) => {
    const toastOptions: ToastOptions = {
      position: "bottom-center",
      autoClose: 2000,
      theme: "dark",
      pauseOnHover: false,
      toastId: toastId,
    };

    switch (type) {
      case "error":
        toast.error(message, toastOptions);
        break;
      case "success":
        toast.success(message, toastOptions);
        break;
      case "info":
        toast.info(message, toastOptions);
        break;
      case "warning":
        toast.warn(message, toastOptions);
        break;
      case "loading":
        return toast.loading(message, toastOptions);
      default:
        toast(message, toastOptions);
    }
  };

  const updateNotification = ({
    message,
    toastId,
    type,
  }: updateNotificationProps) => {
    const toastOptions: ToastOptions = {
      position: "bottom-center",
      autoClose: 2000,
      theme: "dark",
      pauseOnHover: false,
      toastId: toastId,
    };

    toast.update(toastId, {
      render: message,
      type: type,
      isLoading: false,
      autoClose: 2000,
      ...toastOptions,
    });
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification, updateNotification }}
    >
      <ToastContainer />
      {children}
    </NotificationContext.Provider>
  );
};
