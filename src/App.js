import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import Home from "./Containers/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
