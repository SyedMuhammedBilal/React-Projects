import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayer } from "./store";
import reducer, { initialState } from "./store/initialState";
import './index.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </StrictMode>,
  rootElement
);
