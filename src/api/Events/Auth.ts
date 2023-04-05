import { EventModel } from "../Model/Events.model";

import { cspdvApi } from "../utils/database.utils";
import { SignOptions } from "jsonwebtoken";
import { JWToken } from "../utils/jwt.util";

export default new EventModel({
  EVENT_NAME: "user:auth",
  execute: async (authString: string) => {
    try {
      if (!authString) {
        throw "No auth string";
      }

      const [type, token] = authString.split(" ");

      if (type !== "Basic" || !token) {
        throw "Invalid auth type";
      }

      const [username, password] = Buffer.from(token, "base64")
        .toString()
        .split(":");

      if (!username && !password) {
        throw "Digite o nome do usuario ou senha!";
      }

      const user = await cspdvApi.user.findUnique({
        where: {
          username,
        },
        include: {
          PermLevel: true,
        },
      });

      if (!user) {
        throw "Usuario não cadastrado favor entrar em contato com o administrador!";
      }

      if (user.password !== password) {
        throw "Usuario ou senha incorretos!";
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = user;

      const Payload = {
        user: userWithoutPassword,
      };

      const Options: SignOptions = {
        expiresIn: "1d",
        subject: user.id,
      };

      const JWT = JWToken.sign(Payload, Options);

      await cspdvApi.user.update({
        where: {
          id: user.id,
        },
        data: {
          token: JWT,
        },
      });

      return {
        token: JWT,
      };
    } catch (error) {
      throw error.toString();
    }
  },
});
