import { ReactNode, useMemo } from "react";
import TransactionsContext, { Transaction } from "./TransactionsContext";
import useLocalStorageState from "../../hooks/useLocalStorageState";

interface Props {
  children: ReactNode;
}

const TransactionContextProvider = ({ children }: Props) => {
  const [transactions, setTransactions] = useLocalStorageState<Transaction[]>(
    "transactions",
    []
  );

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionContextProvider;
