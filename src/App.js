import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import Login from "./Containers/Login/Login";
import Home from "./Containers/Home/Home";

// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <BrowserRouter>
          {/* <Header /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
