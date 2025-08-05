import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ButtonFavoriteCart() {
    return (
        <Link to="/cart"><button
            className="w-15 h-15 border border-mid-gray hover:bg-hover-light-gray cursor-pointer flex items-center justify-center rounded-4xl shrink-0">
            <img src="svg/solar_heart-bold.svg" alt="Избранное" className="w-9 h-9"/>
        </button></Link>
    )
}