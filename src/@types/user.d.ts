import { User, PermLevel } from "@prismaGenerated/cspdv";

export interface UsersFindMany extends Omit<User, "password" | "token"> {
  PermLevel: PermLevel;
}

export interface UsersFindOne extends Omit<User, "password"> {
  PermLevel: PermLevel;
}
