import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/share/Footer";
import Nav from './components/share/Nav';
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
