import { createContext } from "react";

export interface LoginContextInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

export const LoginContext = createContext<LoginContextInterface>(
  {} as LoginContextInterface
);
