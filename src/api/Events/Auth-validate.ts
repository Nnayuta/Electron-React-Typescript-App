import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";

export default new EventModel({
  EVENT_NAME: "user:validate",
  execute: async (userID: string) => {
    try {
      if (!userID) {
        throw "No auth string";
      }

      const user = await cspdvApi.user.findUnique({
        where: {
          id: userID,
        },
        include: {
          PermLevel: true,
        },
      });

      if (!user) {
        throw "Usuario não cadastrado favor entrar em contato com o administrador!";
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = user;

      return {
        user: userWithoutPassword,
      };
    } catch (error) {
      throw error.toString();
    }
  },
});
