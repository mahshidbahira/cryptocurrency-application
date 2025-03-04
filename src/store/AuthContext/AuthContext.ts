import React, { Dispatch, SetStateAction } from "react";

export interface Auth {
  username: string;
}

interface AuthContextType {
  auth: Auth | null;
  setAuth: Dispatch<SetStateAction<Auth | null>>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
