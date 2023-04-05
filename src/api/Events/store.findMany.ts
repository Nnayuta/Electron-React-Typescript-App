import { EventModel } from "../Model/Events.model";
import { storeApi } from "../utils/database.utils";

export default new EventModel({
  EVENT_NAME: "store:findMany",
  execute: async () => {
    try {
      const data = await storeApi.sTORE.findMany({
        include: {
          CHANNEL: true,
          FLAG: true,
          REGION: true,
          SUPPORT: true,
          SUPPORT_LEADER: true,
          TYPE: true,
        },
      });
      return data;
    } catch (error) {
      throw error.toString();
    }
  },
});
