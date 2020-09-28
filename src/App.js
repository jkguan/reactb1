import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponents.js";
import StateFull, {
  StateFullComponent,
} from "./components/StateFullComponent.js";
// có thể đổi tên StateFullComponent thành StateFull
import Home from "./BaiTapChiaComponent/Home";

function App() {
  return <Home />;
}

export default App;
