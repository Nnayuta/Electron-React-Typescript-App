//Define o caminho do banco de dados
process.env.DATABASE_URL = `file:C:/Users/${process.env.USERNAME}/Cencosud/Suporte PDV - CSPDV - CSPDV/cspdv.db`;

import { app, BrowserWindow, ipcMain } from "electron";
import { eventHandle } from "./api";
// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

app.disableHardwareAcceleration();

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    minHeight: 600,
    width: 900,
    minWidth: 900,
    center: true,
    show: false,
    frame: false,
    icon: "./src/assets/icons/icon.ico",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      devTools: !app.isPackaged,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const splashWindow = new BrowserWindow({
    height: 400,
    width: 300,
    frame: false,
    center: true,
    transparent: true,
    resizable: false,
    show: false,
    icon: "./src/assets/icons/icon.ico",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      devTools: !app.isPackaged,
    },
  });

  splashWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY + "#/splash");

  splashWindow.once("ready-to-show", () => {
    splashWindow.show();
  });

  mainWindow.once("ready-to-show", async () => {
    await eventHandle();

    mainWindow.show();
    splashWindow.close();
  });

  ipcMain.handle("close", () => {
    mainWindow.close();
  });

  ipcMain.handle("minimize", () => {
    mainWindow.minimize();
  });

  ipcMain.handle("maximize", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

if (require("electron-squirrel-startup")) app.quit();

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});