import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Route.jsx";
import Loader from "./components/Loader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Loader></Loader>}
      ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);
