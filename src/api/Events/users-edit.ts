import { User } from "@prismaGenerated/cspdv";
import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";
import { JWToken } from "../utils/jwt.util";

interface UserEditData {
  user: Omit<User, "password">;
  authToken: string;
}

export default new EventModel({
  EVENT_NAME: "user:edit",
  execute: async (data: UserEditData) => {
    try {
      const { user, authToken } = data;

      if (!user) {
        throw "No user data provided";
      }

      if (!authToken) {
        throw "No auth token provided";
      }

      const payload = JWToken.verify<User>(authToken);

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
          id: user.id,
        },
      });

      if (!userExists) {
        throw "User does not exist";
      }

      if (userExists.username !== user.username) {
        const usernameExists = await cspdvApi.user.findUnique({
          where: {
            username: user.username,
          },
        });

        if (usernameExists) {
          throw "Username already exists";
        }
      }

      const { id: _, ...userWithoutid } = user;

      const updatedUser = await cspdvApi.user.update({
        where: {
          id: user.id,
        },
        data: {
          ...userWithoutid,
        },
      });

      if (!updatedUser) {
        throw "Failed to update user";
      }

      return true;
    } catch (error) {
      throw error.toString();
    }
  },
});
