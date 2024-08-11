import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./pages/Homepage";
import React from "react";
import Chatpage from "./pages/Chatpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chat" component={Chatpage} />
    </div>
  );
}

export default App;
