import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";

export default new EventModel({
  EVENT_NAME: "get:users",
  execute: async () => {
    try {
      const Users = await cspdvApi.user.findMany({
        include: {
          PermLevel: true,
        },
      });

      return Users;
    } catch (error) {
      throw error.toString();
    }
  },
});
