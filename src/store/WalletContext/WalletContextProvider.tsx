import { ReactNode } from "react";

import useLocalStorageState from "../../hooks/useLocalStorageState";
import WalletContext, { Wallet } from "./WalletContext";

interface Props {
  children: ReactNode;
}

const WalletContextProvider = ({ children }: Props) => {
  const [wallet, setWallet] = useLocalStorageState<Wallet | null>(
    "wallet",
    null
  );

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
