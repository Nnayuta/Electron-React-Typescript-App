import { exec } from "child_process";
import { IPDV } from "../../@types/pdv";
import { configStore } from "../../services/config";
import { EventModel } from "../Model/Events.model";
import { getPath } from "../utils/path";

export default new EventModel({
  EVENT_NAME: "manualConnection",
  execute: async (pdv: IPDV) => {
    try {
      const putty = getPath({
        resourcesPath: "./AppExternos/Putty",
      });
      const config = configStore.store;
      exec(
        `putty.exe ${config.PDV_username}@${pdv.POS_IP} -pw ${config.PDV_password}`,
        { cwd: putty }
      );

      return true;
    } catch (error) {
      throw error.toString();
    }
  },
});
