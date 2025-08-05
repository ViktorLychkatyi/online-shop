import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import * as React from "react";

export function Admin() {
    return (
        <>
            <form action="" className="container m-auto w-xl h-screen flex flex-col justify-center items-center" onSubmit={(e) => e.preventDefault()}>
                <img src="svg/logo.svg" alt="" width={"150px"}/>
                <h2 className="text-2xl font-semibold flex justify-center mt-6 mb-6">Административная панель</h2>
                <h2 className="text-2xl font-semibold flex justify-center mt-6 mb-6">Войти</h2>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <input
                        className="w-xl h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
                        placeholder="Электронная почта"
                    />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <input
                        className="w-xl h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
                        type="password"
                        placeholder="Пароль"
                    />
                </fieldset>
                <button className="bg-tiny text-white w-full h-[50px] rounded-4xl font-medium hover:bg-opacity-90">Войти</button>
            </form>
        </>
    )
}