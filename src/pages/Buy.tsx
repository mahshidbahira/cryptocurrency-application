import { useNavigate } from "react-router-dom";
import { DateTime } from "time-wise";
import useTransactionCreate from "../hooks/Transaction/useTransactionCreate";
import ReusableForm from "../components/Form/Form";

interface BuyFormInput {
  crypto: string;
  amount: number;
}

const Buy = () => {
  const navigate = useNavigate();

  const { createTransaction } = useTransactionCreate();

  const onSubmit = (data: BuyFormInput) => {
    const datetime = DateTime.now();

    const mutateData = {
      amount: +data.amount,
      crypto_currency_symbol: data.crypto,
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
        <div className="flex flex-col items-center bg-white p-8  rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            BUY
          </h2>

          <ReusableForm<BuyFormInput>
            onSubmit={onSubmit}
            submitText="Buy"
            fields={[
              {
                name: "crypto",
                type: "text",
                label: "Crypto Currency",
                placeholder: "Enter your crypto ...",
                validation: {
                  required: "Crypto is required",
                  minLength: {
                    value: 3,
                    message: "Must be at least 3 characters",
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
                },
              },
            ]}
          />

          <button
            type="button"
            onClick={() => navigate("/wallet")}
            className="w-1/3 bg-red-400 text-white py-3 mt-4 rounded-lg hover:shadow-xl hover:bg-red-500 hover:scale-101 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Buy;
