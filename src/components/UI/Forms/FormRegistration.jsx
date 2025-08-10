import * as React from "react";
import { useActionState, useEffect, useState } from 'react';
import {Link} from "react-router";
import {FormLogin} from "./FormLogin.jsx";
import {ButtonLogin} from "../Buttons/ButtonLogin.jsx";

export const FormRegistration = () => {
    const [isRegister, setIsRegister] = React.useState(false);

    const initialFormState = {
        login: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState('');

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setFormState((prev) => ({
                ...prev,
            }));
        }
    }, [errors]);

    const validateForm = () => {
        const newErrors = {};

        if (!formState.login) {
            newErrors.login = 'Login is required';
        } else if (formState.login.length < 3) {
            newErrors.login = 'Login must be at least 3 characters';
        }

        if (!formState.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formState.password) {
            newErrors.password = 'Password is required';
        } else if (formState.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formState.confirmPassword) {
            newErrors.confirmPassword = 'Confirm password is required';
        } else if (formState.confirmPassword !== formState.password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const [State, formAction, isPending] = useActionState(
        async (prevState, formData) => {

            const updatedState = {
                ...formState,
                ...Object.fromEntries(formData.entries()),
            };
            setFormState(updatedState);

            if (!validateForm()) {
                return updatedState;
            }

            try {
                const entries = {
                    ...updatedState,
                };
                const login = formData.get('login') || '';
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username: login })
                });
                if (response.ok) {
                    console.log('статус ответа:', response.status);
                    console.log('отправленные данные:', entries);

                    sessionStorage.setItem('registeredEmail', entries.email);
                    sessionStorage.setItem('registeredPassword', entries.password);

                    // alert('Вы успешно вошли в систему!');
                    setErrors({});
                    setFormState(initialFormState);
                    return initialFormState;
                } else {
                    throw new Error('Ошибка сервера: ' + response.status);
                }
            } catch (error) {
                console.log('Произошла ошибка при отправке данных. ' + error.message);
                return updatedState;
            }
        },
        initialFormState
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }));
        setErrors({});
    };

    return (
        <form className="flex flex-col gap-4" action={formAction}>
            <input
                type="login"
                placeholder="Логин"
                id="login"
                name="login"
                value={FormLogin.login}
                onChange={handleInputChange}
                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
            />
            {errors.login && <span className="text-red">{errors.login}</span>}

            <input
                type="email"
                placeholder="Электронная почта"
                id="email"
                name="email"
                value={FormLogin.email}
                onChange={handleInputChange}
                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
            />
            {errors.email && <span className="text-red">{errors.email}</span>}

            <input
                autoComplete="new-password"
                type="password"
                placeholder="Пароль"
                id="password"
                name="password"
                value={FormLogin.password}
                onChange={handleInputChange}
                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
            />
            {errors.password && <span className="text-red">{errors.password}</span>}

            <input
                autoComplete="new-password"
                type="password"
                placeholder="Повторите пароль"
                id="confirmPassword"
                name="confirmPassword"
                value={FormLogin.confirmPassword}
                onChange={handleInputChange}
                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
            />
            {errors.confirmPassword && <span className="text-red">{errors.confirmPassword}</span>}

            <ButtonLogin/>
        </form>
    )
}