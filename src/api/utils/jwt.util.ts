import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

class JWT {
  public sign(payload: JwtPayload, options: SignOptions): string {
    return jwt.sign(payload, "123", options);
  }

  public verify<T>(token: string) {
    interface Payload extends JwtPayload {
      user: T;
    }

    return jwt.verify(token, "123") as Payload;
  }
}

export const JWToken = new JWT();
