import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@contexts/AuthContext";
import { Page } from "./Page";
import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

import { Provider } from "react-redux";
import { ConfirmationProvider } from "@contexts/ConfirmationContext";
import { NotificationProvider } from "@contexts/NotificationContext";
import { store } from "./store";
import { SWRConfig } from "swr";
import { ipcRenderer } from "electron";
import { ModalProvider } from "@contexts/ModalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <SWRConfig
    value={{
      fetcher: ([ipc, data]: [ipc: string, data?: any]) =>
        ipcRenderer.invoke(ipc, data),
      dedupingInterval: 60000,
    }}
  >
    <Provider store={store}>
      <AuthProvider>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NotificationProvider>
              <ConfirmationProvider>
                <ModalProvider>
                  <Page />
                </ModalProvider>
              </ConfirmationProvider>
            </NotificationProvider>
          </ThemeProvider>
        </HashRouter>
      </AuthProvider>
    </Provider>
  </SWRConfig>
);
