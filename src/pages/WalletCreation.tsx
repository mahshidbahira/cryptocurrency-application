import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWalletRetrieve from "../hooks/Wallet/useWalletRetrieve";
import useWalletCreate from "../hooks/Wallet/useWalletCreate";
import { generate } from "random-words";

const WalletCreation = () => {
  const [mnemonic, setMnemonic] = useState<string[]>([]);

  const navigate = useNavigate();
  const { wallet } = useWalletRetrieve();
  const { createWallet } = useWalletCreate();

  useEffect(() => {
    const words = generate({ exactly: 12 }) as string[];
    setMnemonic(words);
  }, []);

  useEffect(() => {
    if (wallet) {
      navigate("/wallet");
    }
  }, [wallet]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100  md:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-around bg-white p-8 rounded-2xl shadow-lg h-screen md:h-5/6 lg:h-5/6  w-full max-w-lg">
        <h2 className="text-indigo-500 font-bold text-center text-2xl mb-6">
          Save these words for recovery
        </h2>
        <ul className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 w-full justify-between items-center shadow-2xl rounded-xl bg-indigo-400 ">
          {mnemonic.map((word, index) => (
            <li
              key={index}
              className="rounded-md px-2 shadow-2xl bg-gray-50  text-indigo-500 font-thin text-lg"
            >
              {index + 1}. {word}
            </li>
          ))}
        </ul>

        <button
          className="shadow-lg hover:scale-101 hover:bg-indigo-600  bg-indigo-500 text-white py-2 px-4 mt-6 rounded-xl transition duration-300"
          onClick={() => createWallet()}
        >
          Create Wallet
        </button>
      </div>
    </div>
  );
};

export default WalletCreation;
