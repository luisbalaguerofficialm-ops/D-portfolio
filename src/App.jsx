import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Project" element={<Project />} />
        </Routes>

        {/* Toast notifications always stay at the top of the app */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
