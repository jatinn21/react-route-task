import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar /> <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar /> <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
// <Home />

export default App;
