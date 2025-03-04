import { ReactNode } from "react";
import AuthContext, { Auth } from "./AuthContext";
import useLocalStorageState from "../../hooks/useLocalStorageState";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [auth, setAuth] = useLocalStorageState<Auth | null>("auth", null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
