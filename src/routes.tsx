import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Error from "./pages/Error";
import Wallet from "./pages/Wallet";
import Send from "./pages/Send";
import WalletCreation from "./pages/WalletCreation";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import Receive from "./pages/Receive";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/login", element: <Login /> },
  { path: "/walletCreation", element: <WalletCreation /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/buy", element: <Buy /> },
  { path: "/send", element: <Send /> },
  { path: "/receive", element: <Receive /> },
]);

export default router;
