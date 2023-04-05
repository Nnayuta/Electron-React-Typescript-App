import { User } from "@prismaGenerated/cspdv";
import { EventModel } from "../Model/Events.model";
import { cspdvApi } from "../utils/database.utils";
import { JWToken } from "../utils/jwt.util";

interface UserEditData {
  user: {
    username: string;
    permLevelID: number;
  };
  authToken: string;
}

export default new EventModel({
  EVENT_NAME: "user:add",
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
          username: user.username,
        },
      });

      if (userExists) {
        throw "Username already exists";
      }

      const Year = new Date().getFullYear();
      const password = `CSPDV${Year}`;

      const createdUser = await cspdvApi.user.create({
        data: {
          username: user.username,
          password: password,
          permLevelID: user.permLevelID,
        },
      });

      if (!createdUser) {
        throw "Failed to update user";
      }

      return createdUser;
    } catch (error) {
      throw error.toString();
    }
  },
});
