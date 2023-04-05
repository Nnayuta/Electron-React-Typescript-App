import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";

export default new EventModel({
  EVENT_NAME: "pages:get",
  execute: async () => {
    try {
      const Pages = await cspdvApi.pages.findMany({
        include: {
          PermLevel: true,
        },
      });

      return Pages;
    } catch (error) {
      throw error.toString();
    }
  },
});
