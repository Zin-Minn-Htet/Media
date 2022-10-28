import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/share/Footer";
import Nav from './components/share/Nav';
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { RouteGuard } from "./components/share/RouteGuard";
import FallbackRoute from "./components/share/FallbackRoute";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<RouteGuard><Admin /></RouteGuard>} />
        <Route path="*" element={<FallbackRoute/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
