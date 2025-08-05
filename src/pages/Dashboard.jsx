import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import {AdminPanel} from "../components/UI/Layouts/AdminPanel.jsx";
import {AddProduct} from "../components/UI/Layouts/AddProduct.jsx";

export function Dashboard() {
    return (
        <>
            <div className="flex flex-row gap-4">
                <AdminPanel/>
                <AddProduct/>
            </div>
        </>
    )
}