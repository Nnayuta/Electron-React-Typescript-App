import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";

export default new EventModel({
  EVENT_NAME: "permlevel:get",
  execute: async () => {
    try {
      const PermLevel = await cspdvApi.permLevel.findMany();
      return PermLevel;
    } catch (error) {
      throw error.toString();
    }
  },
});
