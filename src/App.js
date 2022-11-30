import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import About from './pages/home/components/about';
import ProductList from './pages/product-list';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
