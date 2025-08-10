import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

import { Navigation } from "./components/UI/layouts/Navigation.jsx";
import { OnNavigation } from "./components/UI/Layouts/OnNavigation.jsx";
import { OffNavigation } from "./components/UI/Layouts/OffNavigation.jsx";

import {Home} from "./pages/Home.jsx";
import {Catalog} from "./pages/Catalog.jsx";
import {Search} from "./pages/Search.jsx";
import {Product} from "./pages/Product.jsx";
import {Cart} from "./pages/Cart.jsx";
import {Order} from "./pages/Order.jsx";
import {Successfully} from "./pages/Successfully.jsx";
import {Admin} from "./pages/Admin.jsx";
import {Dashboard} from "./pages/Dashboard.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OnNavigation><Home /></OnNavigation>}  />
                <Route path="/Catalog" element={<OnNavigation><Catalog /></OnNavigation>} />
                <Route path="/Product" element={<OnNavigation><Product /></OnNavigation>} />
                <Route path="/product/:id" element={<OnNavigation><Product /></OnNavigation>} />
                <Route path="/Search" element={<OnNavigation><Search /></OnNavigation>} />
                <Route path="/Cart" element={<OnNavigation><Cart /></OnNavigation>} />
                <Route path="/Order" element={<OffNavigation><Order /></OffNavigation>} />
                <Route path="/Successfully" element={<OffNavigation><Successfully /></OffNavigation>} />
                <Route path="/Admin" element={<OffNavigation><Admin /></OffNavigation>} />
                <Route path="/Dashboard" element={<OffNavigation><Dashboard /></OffNavigation>} />
            </Routes>
        </Router>
  )
}

export default App
