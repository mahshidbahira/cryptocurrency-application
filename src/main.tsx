import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TransactionContextProvider from "./store/TransactionsContext/TransactionsContextProvider.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import AuthContextProvider from "./store/AuthContext/AuthContextProvider.tsx";
import WalletContextProvider from "./store/WalletContext/WalletContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <WalletContextProvider>
        <TransactionContextProvider>
          <RouterProvider router={router} />
        </TransactionContextProvider>
      </WalletContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
