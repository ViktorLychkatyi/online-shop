import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';

export function ButtonLogo() {
    return (
        <Link to="/"><div className="cursor-pointer"><img src="svg/logo.svg" alt=""/></div></Link>
    )
}