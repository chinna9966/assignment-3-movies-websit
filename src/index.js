import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Movie from "./App";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Movie />
  </StrictMode>,
  rootElement
);
