import { useNavigate } from "react-router-dom";
import useWallet from "../hooks/Wallet/useWallet";
import QRCode from "react-qr-code";

const Receive = () => {
  const wallet = useWallet();
  const navigate = useNavigate();

  let qrString = "";
  if (wallet) {
    qrString = wallet.address;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center bg-gray-100 shadow-lg rounded-lg h-200 w-full max-w-md p-2 md:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-indigo-500 mb-4">
          Wallet Address
        </h2>
        <div className="tracking-wider bg-indigo-400 lg:text-sm text-center text-white shadow-lg rounded-xl p-4 px-6 mb-6">
          {wallet?.address}
        </div>
        <div className="m-10">
          <QRCode
            value={qrString}
            size={128}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>
        <button
          type="button"
          onClick={() => navigate("/wallet")}
          className="w-1/3 bg-red-400 text-white py-3 rounded-lg hover:scale-101 hover:shadow-xl hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Receive;
