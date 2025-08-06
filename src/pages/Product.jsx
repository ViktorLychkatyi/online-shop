import {BrowserRouter as Router, Routes, Route, NavLink, Link, useParams} from 'react-router';
import {Navigation} from "../components/UI/Layouts/Navigation.jsx";
import {ImageProduct} from "../components/UI/Layouts/ImageProduct.jsx";
import {InfoProduct} from "../components/UI/Layouts/InfoProduct.jsx";
import {InfoPrice} from "../components/UI/Layouts/InfoPrice.jsx";
import {ProductPath} from "../components/UI/Layouts/ProductPath.jsx";
import products from '../data/products.json';

export function Product() {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = products.find(p => p.id === productId);

    return (
        <>
            <ProductPath textPath={product.title}/>
            <div className="container m-auto flex flex-row gap-5">
                <div className="container bg-white rounded-2xl">
                    <ImageProduct/>
                </div>
                <div className="container bg-white rounded-2xl">
                    <InfoProduct/>
                </div>
                <div className="container bg-white h-20 w-xl rounded-2xl">
                    <InfoPrice/>
                </div>
            </div>
        </>
    )
}