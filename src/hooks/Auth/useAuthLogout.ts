import { useContext, useState } from "react";

import AuthContext from "../../store/AuthContext/AuthContext";

const useAuthLogout = () => {
  const { setAuth } = useContext(AuthContext);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const logout = () => {
    setIsPending(true);
    setAuth(null);
    setIsPending(false);
  };

  return { logout, error, setError, isPending };
};

export default useAuthLogout;
