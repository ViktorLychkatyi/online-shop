import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ButtonCatalog(){
    return (
        <NavLink to="/catalog"><button className="bg-tiny hover:bg-hover-tiny cursor-pointer flex flex-row items-center justify-center gap-2 text-xl p-3 pl-4 pr-4 rounded-4xl font-semibold shrink-0"><img src="svg/bxs_category.svg" alt=""/>Каталог</button></NavLink>
    )
}