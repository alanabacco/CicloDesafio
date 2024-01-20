import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import { AppThemeProvider } from "./themes/ThemeContext.tsx";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage/index.tsx";
import Formulario from "./pages/Formulario/index.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </AppThemeProvider>
  </React.StrictMode>
);
