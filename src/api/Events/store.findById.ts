import { EventModel } from "../Model/Events.model";
import { storeApi } from "../utils/database.utils";

export default new EventModel({
  EVENT_NAME: "store:findById",
  execute: async (id: string) => {
    try {
      const data = await storeApi.sTORE.findFirst({
        where: {
          STORE_ID: id,
        },
      });
      return data;
    } catch (error) {
      throw error.toString();
    }
  },
});
