import { useContext } from "react";

import WalletContext from "../../store/WalletContext/WalletContext";

const useWallet = () => {
  const { wallet } = useContext(WalletContext);

  return wallet;
};

export default useWallet;
