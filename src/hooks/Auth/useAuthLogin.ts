import { useContext, useState } from "react";

import AuthContext from "../../store/AuthContext/AuthContext";

const useAuthLogin = () => {
  const { setAuth } = useContext(AuthContext);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const login = (username: string, password: string) => {
    setIsPending(true);
    if (username === "admin" && password === "12345678") {
      setAuth({ username });
    } else {
      setError(new Error("username and password combination is invalid"));
    }
    setIsPending(false);
  };

  return { login, error, isPending };
};

export default useAuthLogin;
