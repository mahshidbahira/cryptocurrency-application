import { useContext } from "react";
import TransactionsContext from "../../store/TransactionsContext/TransactionsContext";

const useTransactionList = () => {
  const { transactions } = useContext(TransactionsContext);

  return { transactions, error: null, isPending: false };
};

export default useTransactionList;
