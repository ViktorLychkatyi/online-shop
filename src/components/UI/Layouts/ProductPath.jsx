import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ProductPath({textPath}) {
    return (
        <div className="container m-auto flex flex-row items-center gap-2">
            <Link to="/"><p className="text-dark-gray text-base mt-2 mb-2 hover:text-black cursor-pointer">Главная</p></Link>
            <p>/</p>
            <p className="text-dark-gray text-base mt-2 mb-2">{textPath}</p>
        </div>
    )
}