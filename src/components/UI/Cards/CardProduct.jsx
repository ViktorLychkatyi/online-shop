import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import {AddToCart} from "../Buttons/AddToCart.jsx";

export function CardProduct() {
    return (
        <div className="w-2xs h-[465px] bg-white cursor-pointer rounded-2xl p-2 flex flex-col gap-1">
            {/* Обертка ссылки без кнопки */}
            <Link to="/product" className="flex-grow">
                <img src="img/Rectangle 105.jpg" alt=""/>
                <p className="line-clamp-2">
                    Lenovo Legion 5 16IRX9 Игровой ноутбук 16", Intel Core i7-14650HX, RAM 32 ГБ, SSD 1024 ГБ, NVIDIA GeForce RTX 4060 (8 Гб), Без системы, (83DG004DRK), серый, Русская раскладка
                </p>
                <div className="flex flex-col items-start gap-1">
                    <div className="flex flex-row gap-5 mt-2">
                        <div className="flex flex-row"><img src="svg/material-symbols_star-rounded.svg" alt=""/>5</div>
                        <div className="flex flex-row gap-1 w-full"><img src="svg/Frame 15.svg" alt=""/>0 отзывов</div>
                    </div>
                    <div className="flex"></div>
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-2xl font-semibold">15 000 грн</p>
                        <p className="text-sm font-medium relative top-0.5 line-through text-dark-gray">25 000 грн</p>
                    </div>
                </div>
            </Link>

            <AddToCart/>
        </div>
    );
}