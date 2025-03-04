import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Transaction from "../components/Transaction/Transaction";
import useTransactionList from "../hooks/Transaction/useTransactionList";
import useAuth from "../hooks/Auth/useAuth";
import useAuthLogout from "../hooks/Auth/useAuthLogout";

const Wallet = () => {
  const auth = useAuth();
  const { logout } = useAuthLogout();
  const { transactions } = useTransactionList();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  const balance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  return (
    <div className="flex items-center justify-center h-screen px-1 sm:px-6 lg:px-8">
      <div className="bg-gray-200 shadow-lg rounded-2xl w-full max-w-md md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto p-6">
        <div className="flex flex-row justify-between mb-6">
          <h2 className="text-xl  text-indigo-500">Hello {auth?.username}!</h2>
          <button
            className="cursor-pointer text-indigo-500 rounded-xl hover:text-indigo-700  transition duration-200"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-white rounded-xl shadow-lg mb-4 p-6 bg-indigo-400 ">
          <h3 className="text-lg font-semibold">Total Balance</h3>
          <div className="font-extrabold text-2xl mt-2">{balance} $</div>
          <button
            className="hover:bg-indigo-600 hover:scale-105 bg-indigo-500 shadow-lg mt-3  text-white text-xl font-bold px-3 pt-1 pb-1.5 rounded-full transition duration-300"
            onClick={() => navigate("/Buy")}
          >
            +
          </button>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className="w-20 shadow-lg hover:scale-105 hover:bg-indigo-600 bg-indigo-500 text-white py-2 rounded-xl transition duration-300"
            onClick={() => navigate("/send")}
          >
            Send
          </button>
          <button
            className="w-20 shadow-lg hover:scale-105 hover:bg-indigo-600 bg-indigo-500 text-white py-2 rounded-xl transition duration-300"
            onClick={() => navigate("/receive")}
          >
            Receive
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto mb-2 rounded-2xl">
          {[...transactions].reverse().map((transaction, index) => (
            <Transaction
              key={index}
              amount={transaction.amount}
              crypto_currency_symbol={transaction.crypto_currency_symbol}
              transaction_date={transaction.transaction_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
