import { useContext, useState } from "react";

import WalletContext from "../../store/WalletContext/WalletContext";

const useWalletCreate = () => {
  const { setWallet } = useContext(WalletContext);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const createWallet = () => {
    setIsPending(true);
    setWallet({ address: `a631b910-636d-4f2c-827c-c33cfc611349` });
    setIsPending(false);
  };

  return { createWallet, error, setError, isPending };
};

export default useWalletCreate;
