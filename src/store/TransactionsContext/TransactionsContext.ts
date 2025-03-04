import React, { Dispatch, SetStateAction } from "react";

export interface Transaction {
  amount: number;
  crypto_currency_symbol: string;
  transaction_date: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
}

const TransactionsContext = React.createContext<TransactionsContextType>(
  {} as TransactionsContextType
);

export default TransactionsContext;
