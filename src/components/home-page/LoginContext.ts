import { createContext } from "react";

export interface LoginContextInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginContext = createContext<LoginContextInterface>(
  {} as LoginContextInterface
);
