interface Props {
  amount: number;
  crypto_currency_symbol: string;
  transaction_date: string;
}

const Transaction = (props: Props) => {
  const { amount, crypto_currency_symbol, transaction_date } = props;

  return (
    <div className="flex justify-between  bg-gray-50 rounded-xl mb-2 px-6 py-2 shadow-sm">
      <div className="flex flex-col items-end font-bold text-gray-600">
        <div>{crypto_currency_symbol}</div>
        <div className="font-thin text-sm">time</div>
      </div>
      <div className="flex flex-col items-end font-semibold text-gray-600">
        <div>
          <span
            className={amount > 0 ? "text-green-600" : "text-red-600 text-xl"}
          >
            {amount > 0 ? <span>&uarr; </span> : <span>&darr;</span>}
          </span>
          {amount}
        </div>
        <div className="font-thin text-sm">{transaction_date}</div>
      </div>
    </div>
  );
};

export default Transaction;
