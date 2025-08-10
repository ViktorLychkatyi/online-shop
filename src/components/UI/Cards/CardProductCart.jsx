import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import {ButtonFavoriteCart} from "../Buttons/ButtonFavoriteCart.jsx";
import {ButtonRemoveProduct} from "../Buttons/ButtonRemoveProduct.jsx";
import {CardNameCatalog} from "../Cards/CardNameCatalog.jsx";
import {CartOrder} from "../Layouts/CartOrder.jsx";
import {ButtonCountProduct} from "../Buttons/ButtonCountProduct.jsx";

export function CardProductCart({product}) {

    return (
        <div className="w-8xl bg-white flex rounded-2xl">
            <div className={"bg-white rounded-md w-full flex justify-center items-center h-64 bg-gray-100 overflow-hidden"}><img src={product.image} alt={product.title} className="max-h-full object-contain" /></div>
            <div className="flex flex-row">
                <p></p>
                <div className="w-4xl p-4">
                    <div className="flex flex-row">
                        <p className="w-full line-clamp-3 text-xl font-semibold">{product.title}</p>
                        <div className="flex flex-col items-end w-xl gap-1 p-4 pt-0 rounded-2xl">
                            <h3 className="text-2xl text-dark-gray line-through">{product.discount} грн</h3>
                            <h2 className="text-4xl text-red font-semibold">{product.price} грн</h2>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 mt-12 justify-between">
                        <div className="flex flex-row gap-4">
                            <ButtonFavoriteCart/>
                            <ButtonRemoveProduct/>
                        </div>
                        <div>
                            <ButtonCountProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}