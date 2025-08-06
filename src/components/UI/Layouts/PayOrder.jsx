import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import {ButtonNext} from "../Buttons/ButtonNext.jsx";

export function PayOrder() {
    return (
        <div className="bg-white flex flex-col gap-1 p-4 gap-3 rounded-2xl">
            <Link to="/successfully"><ButtonNext buttonText="Оплатить"/></Link>
            <p>Товары на сумму  <b>20 000</b></p>
            <p>Скидка  <b>20 000</b></p>
            <p>Общая сумма  <b className="text-5xl">20 000</b></p>
        </div>
    )
}