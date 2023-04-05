import { EventModel } from "../Model/Events.model";
import { IConfig, configStore } from "../../services/config";

export interface IexecParams {
  key: keyof IConfig;
  value: string | boolean | number;
}

export default new EventModel({
  EVENT_NAME: "config:set",
  execute: async ({ key, value }: IexecParams) => {
    try {
      configStore.set(key, value);
      return value;
    } catch (error) {
      throw `Não foi possível atualizar a configuração`;
    }
  },
});
