import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { themeChakra } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themeChakra}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
