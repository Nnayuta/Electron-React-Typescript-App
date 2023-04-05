import { ipcMain, IpcMainEvent } from "electron";
import { EventModel } from "./Model/Events.model";

export const eventHandle = async () => {
  try {
    const files = require.context("@Events", true, /\.(js|ts)$/);
    const keys = files.keys();

    keys.forEach((key) => {
      const event: EventModel = files(key).default;

      ipcMain.handle(
        event.EVENT_NAME,
        async (
          _mainEvent: IpcMainEvent,
          mainData: object | string | number | boolean | null
        ) => {
          try {
            const data = await event.execute(mainData);
            return data;
          } catch (error) {
            console.log("API - EventHandle:", error);
            throw error;
          }
        }
      );
    });
  } catch (error) {
    console.log("API - EventHandle:", error);
  }
};
