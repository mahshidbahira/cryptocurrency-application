import { useContext } from "react";
import TransactionsContext, {
  Transaction,
} from "../../store/TransactionsContext/TransactionsContext";

const useTransactionCreate = () => {
  const { setTransactions } = useContext(TransactionsContext);

  const createTransaction = (transaction: Transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return { createTransaction, error: null, isPending: false };
};

export default useTransactionCreate;
