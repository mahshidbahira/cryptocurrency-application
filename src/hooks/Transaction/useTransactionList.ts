import { useContext, useMemo } from "react";
import TransactionsContext from "../../store/TransactionsContext/TransactionsContext";

const useTransactionList = () => {
  const { transactions } = useContext(TransactionsContext);

  const balance = useMemo(() => {
    return transactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );
  }, [transactions]);

  return { transactions, balance, error: null, isPending: false };
};

export default useTransactionList;
