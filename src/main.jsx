import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
// import { Helmet } from "react-helmet";
// import { Typewriter } from "react-simple-typewriter";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <ToastContainer />
      {/* <Helmet> */}
      {/* <Typewriter /> */}
      <RouterProvider router={router} />
      {/* </Helmet> */}
    </QueryClientProvider>
  </AuthProvider>
);
