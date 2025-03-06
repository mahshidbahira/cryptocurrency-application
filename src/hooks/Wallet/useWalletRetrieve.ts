import { useContext } from "react";

import WalletContext from "../../store/WalletContext/WalletContext";

const useWalletRetrieve = () => {
  const { wallet } = useContext(WalletContext);

  return { wallet, error: null, isPending: false };
};

export default useWalletRetrieve;
