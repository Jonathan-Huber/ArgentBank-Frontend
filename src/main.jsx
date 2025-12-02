import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";

// REDUX
import { Provider } from "react-redux";
import store from "./store/store.js";

import AppInitializer from "./components/AppInitializer/AppInitializer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppInitializer>
        <App />
      </AppInitializer>
    </Provider>
  </StrictMode>
);
