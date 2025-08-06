import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import {AddToCart} from "../Buttons/AddToCart.jsx";

export function CardProduct({product}) {
    return (
        <div className="w-2xs h-[465px] bg-white cursor-pointer rounded-2xl p-2 flex flex-col gap-1">
            <Link to={`/product/${product.id}`} className="flex-grow">
                <div className={"bg-white rounded-md w-full flex justify-center items-center h-64 bg-gray-100 overflow-hidden"}><img src={product.image} alt={product.title} className="max-h-full object-contain" /></div>
                <p className="line-clamp-2 mt-2">{product.title}</p>
                <div className="flex flex-col items-start gap-1">
                    <div className="flex flex-row gap-5 mt-2">
                        <div className="flex flex-row"><img src="svg/material-symbols_star-rounded.svg" alt=""/>{product.starsReview}</div>
                        <div className="flex flex-row gap-1 w-full"><img src="svg/Frame 15.svg" alt=""/>{product.countReview} отзывов</div>
                    </div>
                    <div className="flex"></div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="text-2xl font-semibold">{product.price} грн</p>
                        <p className="text-sm font-medium relative top-0.5 line-through text-dark-gray">{product.oldPrice} грн</p>
                    </div>
                </div>
            </Link>

            <AddToCart buttonText="В корзину"/>
        </div>
    );
}