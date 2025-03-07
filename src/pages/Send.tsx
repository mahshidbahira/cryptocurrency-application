import { useNavigate } from "react-router-dom";
import { DateTime } from "time-wise";
import useTransactionCreate from "../hooks/Transaction/useTransactionCreate";
import ReusableForm from "../components/Form/Form";
import useTransactionList from "../hooks/Transaction/useTransactionList";

interface SendFormInput {
  address: string;
  amount: number;
}

const Send = () => {
  const navigate = useNavigate();

  const { createTransaction } = useTransactionCreate();
  const { balance } = useTransactionList();

  const onSubmit = (data: SendFormInput) => {
    const datetime = DateTime.now();

    const mutateData = {
      amount: -data.amount,
      crypto_currency_symbol: "ETH",
      transaction_date: `${datetime.hour}:${datetime.minute}${
        datetime.hour > 12 ? " PM" : " AM"
      }`,
    };

    createTransaction(mutateData);

    navigate("/wallet");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center  items-center bg-white p-8  rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Send
          </h2>

          <ReusableForm<SendFormInput>
            onSubmit={onSubmit}
            submitText="Send"
            fields={[
              {
                name: "address",
                type: "text",
                label: "Wallet Address",
                placeholder: "Enter your wallet address ...",
                validation: {
                  required: "Address is required",
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters",
                  },
                },
              },
              {
                name: "amount",
                type: "number",
                label: "Amount",
                placeholder: "$",
                validation: {
                  required: "Amount is required",
                  min: {
                    value: 1,
                    message: "Amount must be greater than 0",
                  },
                  max: {
                    value: balance,
                    message: `The amount cannot be more than the account balance.`,
                  },
                },
              },
            ]}
          />

          <button
            type="button"
            onClick={() => navigate("/wallet")}
            className="w-1/3 bg-red-400 text-white py-3 mt-4 hover:shadow-xl rounded-lg hover:scale-101 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Send;
