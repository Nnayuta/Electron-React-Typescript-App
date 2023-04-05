import { UsersFindOne } from "@/@types/user";
import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";
import { JWToken } from "../utils/jwt.util";

interface UserDeleteData {
  userId: string;
  authToken: string;
}

export default new EventModel({
  EVENT_NAME: "user:delete",
  execute: async (data: UserDeleteData) => {
    try {
      const { userId, authToken } = data;

      if (!userId) {
        throw "No user id provided";
      }

      if (!authToken) {
        throw "No auth token provided";
      }

      const payload = JWToken.verify<UsersFindOne>(authToken);

      if (!payload) {
        throw "Invalid auth token provided";
      }

      const requestedUser = await cspdvApi.user.findUnique({
        where: {
          id: payload.user.id,
        },
      });

      if (!requestedUser) {
        throw "Invalid auth token provided";
      }

      if (requestedUser.token !== authToken) {
        throw "Invalid auth token provided";
      }

      if (!requestedUser.isAdmin) {
        throw "You are not authorized to perform this action";
      }

      const userExists = await cspdvApi.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!userExists) {
        throw "User does not exist";
      }

      const deletedUser = await cspdvApi.user.delete({
        where: {
          id: userId,
        },
      });

      if (!deletedUser) {
        throw "Failed to delete user";
      }

      return true;
    } catch (error) {
      throw error.toString();
    }
  },
});
