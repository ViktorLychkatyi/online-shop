import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ButtonLogo() {
    return (
        <NavLink to="/"><div className="cursor-pointer"><img src="svg/logo.svg" alt=""/></div></NavLink>
    )
}