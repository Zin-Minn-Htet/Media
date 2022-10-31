import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/share/Footer";
import Nav from './components/share/Nav';
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { RouteGuard } from "./components/share/RouteGuard";
import FallbackRoute from "./components/share/FallbackRoute";
import Allcat from "./components/admin/category/Allcat";
import Addcat from "./components/admin/category/Addcat";
import Editcat from "./components/admin/category/Editcat";
import AllTag from "./components/admin/tag/AllTag";
import AddTag from "./components/admin/tag/AddTag";
import EditTag from "./components/admin/tag/EditTag";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<RouteGuard><Admin /></RouteGuard>}>
          <Route path="cats">
            <Route path="all" element={<Allcat/>}/>
            <Route path="add" element={<Addcat/>} />
            <Route path="edit/:id" element={<Editcat/>}/>
          </Route>
          <Route path="tags">
            <Route path="all" element={<AllTag />} />
            <Route path="add" element={<AddTag />} />
            <Route path="edit/:id" element={<EditTag />} />
          </Route>
        </Route>
        <Route path="*" element={<FallbackRoute/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
