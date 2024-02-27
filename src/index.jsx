import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import App from "./App";
import { CardDataContextProvider } from "./context/CardDataContext";
import { SoundContextProvider } from "./context/SoundContext";
import theme from "./theme";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SoundContextProvider>
        <CardDataContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </CardDataContextProvider>
      </SoundContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
