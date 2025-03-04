import React, { Dispatch, SetStateAction } from "react";

export interface Wallet {
  address: string;
}

interface WalletContextType {
  wallet: Wallet | null;
  setWallet: Dispatch<SetStateAction<Wallet | null>>;
}

const WalletContext = React.createContext<WalletContextType>(
  {} as WalletContextType
);

export default WalletContext;
