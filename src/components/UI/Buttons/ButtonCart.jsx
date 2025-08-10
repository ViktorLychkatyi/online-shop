import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ButtonCart(){
    return (
        <NavLink
            to="/cart"
            className="w-15 h-15 bg-light-gray hover:bg-hover-light-gray cursor-pointer flex items-center justify-center rounded-4xl shrink-0">
            <img src="svg/fluent_cart-16-regular.svg" alt="Корзина" className="w9 h-9"/>
        </NavLink>
    )
}