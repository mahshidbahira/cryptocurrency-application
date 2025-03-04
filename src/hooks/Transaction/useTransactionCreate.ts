import { useContext } from "react";
import TransactionsContext, {
  Transaction,
} from "../../store/TransactionsContext/TransactionsContext";

const useTransactionCreate = () => {
  const { transactions, setTransactions } = useContext(TransactionsContext);

  const createTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return { createTransaction, error: null, isPending: false };
};

export default useTransactionCreate;
