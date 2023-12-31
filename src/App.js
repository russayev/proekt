import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Shoes from "./components/Shoes";
import Card from "./components/Card";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Conditions from "./components/Conditions";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutUs from "./components/About";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {location.pathname === "/login" && <Login />}
      {location.pathname === "/signup" && <Signup />}

      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
