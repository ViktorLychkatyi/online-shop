import { useState } from 'react';
import {Link} from "react-router";
import * as React from "react";
import {ButtonLogin} from "../Buttons/ButtonLogin.jsx";

export const FormLogin = ({ onLoginSuccess }) => {
    const [email, setEmail] = React.useState(() => sessionStorage.getItem('registeredEmail') || '');
    const [password, setPassword] = React.useState(() => sessionStorage.getItem('registeredPassword') || '');
    const [errors, setErrors] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const registeredEmail = sessionStorage.getItem('registeredEmail');
        const registeredPassword = sessionStorage.getItem('registeredPassword');

        if (email === registeredEmail && password === registeredPassword) {
            console.log(`Пользователь зашел: ${email}`);

            if (onLoginSuccess) onLoginSuccess();

            sessionStorage.removeItem('registeredEmail');
            sessionStorage.removeItem('registeredPassword');
        } else {
            setErrors('Неверный логин или пароль');
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
            />

            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
            />

            {errors && <span className="text-red">{errors}</span>}

            <ButtonLogin/>
        </form>
    );
};
