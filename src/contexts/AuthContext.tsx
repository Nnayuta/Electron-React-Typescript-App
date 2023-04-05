import { UsersFindOne } from "@/@types/user";
import { ipcRenderer } from "electron";
import React, { createContext, useEffect, useState } from "react";
import { JWToken } from "@api/utils/jwt.util";

interface AuthProviderTypes {
  children: React.ReactNode;
}

export interface UserAuthTypes {
  username: string;
  password: string;
}

interface AuthContextType {
  loading: boolean;
  isAuthenticated: boolean;
  user: UsersFindOne;
  error: string;
  onSignIn: ({ username, password }: UserAuthTypes) => Promise<void>;
  onLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC<AuthProviderTypes> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UsersFindOne>(null);
  const [error, setError] = useState<string>("");
  const isAuthenticated = Boolean(user);

  useEffect(() => {
    const findUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const payload = JWToken.verify<UsersFindOne>(token);
          if (typeof payload === "object" && payload.sub) {
            const data = await ipcRenderer.invoke(
              "user:validate",
              payload.user.id
            );

            if (data.user) {
              const user = data.user as UsersFindOne;

              if (user.token !== token) {
                localStorage.removeItem("token");
                return;
              }

              setUser(user);
            }

            if (data.error) {
              setError(data.error);
            }
          }
        }
      } catch (error) {
        console.log("AuthContext:", error);
      }
    };

    findUser();
  }, []);

  const onSignIn = async ({ username, password }: UserAuthTypes) => {
    try {
      setLoading(true);
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );
      const data = await ipcRenderer.invoke(
        "user:auth",
        `Basic ${credentials}`
      );

      if (data) {
        const payload = JWToken.verify<UsersFindOne>(data.token);

        if (typeof payload === "object" && payload.sub) {
          setUser(payload.user);
          localStorage.setItem("token", data.token);
        }
      }

      if (data.error) {
        setError(data.error);
      }
    } catch (error) {
      console.log("AuthContext:", error);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = async () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated, error, onSignIn, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
