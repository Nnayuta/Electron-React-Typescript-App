import { EventModel } from "../Model/Events.model";
import { configStore } from "../../services/config";

export default new EventModel({
  EVENT_NAME: "config:get",
  execute: async () => {
    try {
      const data = configStore.store;
      if (!data) throw "No data found";
      return data;
    } catch (error) {
      throw error.toString();
    }
  },
});
