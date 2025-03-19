import React from "react";
import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./AppRoutes"; // Import AppRoutes
import AppRoutes from "./routes/AppRoutes"; // Import AppRoutes
import $ from "jquery";
import "jquery.easing";
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  return (
    <BrowserRouter> {/* ✅ Use BrowserRouter only once */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
