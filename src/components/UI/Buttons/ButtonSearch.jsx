import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ButtonSearch(){
    return (
        <form className="w-full max-w-3xl flex justify-end items-center gap-2">
            <input
                type="text"
                placeholder="Поиск"
                className="w-full text-black bg-white border border-mid-gray rounded-4xl h-15 p-4
             focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"
            />

            <NavLink
                to="/search"
                className="bg-tiny hover:bg-hover-tiny cursor-pointer text-white flex items-center justify-center p-4 w-20 rounded-4xl absolute"
            >
                <img src="svg/search.svg" alt=""/>
            </NavLink>
        </form>

    )
}