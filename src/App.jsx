import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import {Home} from "./pages/Home.jsx";
import {Catalog} from "./pages/Catalog.jsx";
import {Search} from "./pages/Search.jsx";
import {Product} from "./pages/Product.jsx";
import {Cart} from "./pages/Cart.jsx";
import {Order} from "./pages/Order.jsx";
import {Successfully} from "./pages/Successfully.jsx";
import {AdminLogin} from "./pages/AdminLogin.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Successfully" element={<Successfully />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  )
}

export default App
