import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FormLogin } from "../Forms/FormLogin.jsx";
import { FormRegistration } from "../Forms/FormRegistration.jsx";

export const ButtonCabinet = () => {
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setIsOpen(false);
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-light-gray hover:bg-hover-light-gray cursor-pointer text-black flex flex-row items-center justify-center gap-2 text-xl p-3 pl-4 pr-4 rounded-4xl font-semibold shrink-0"
                >
                    <img src="svg/heroicons-outline_user.svg" alt="" />
                    {isLoggedIn ? "Кабинет" : "Войти"}
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="bg-[#1212124D] fixed inset-0 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="bg-white fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title className="m-0 mb-4 text-[24px] font-medium text-mauve12 text-center">
                        {isRegister ? "Регистрация" : "Войти"}
                    </Dialog.Title>

                    {isRegister ? (
                        <FormRegistration />
                    ) : (
                        <FormLogin onLoginSuccess={handleLoginSuccess} />
                    )}

                    <p
                        onClick={() => setIsRegister(!isRegister)}
                        className="mt-4 text-[14px] text-center text-blue-600 cursor-pointer hover:underline"
                    >
                        {isRegister
                            ? "Уже есть аккаунт? Войти"
                            : "Нет аккаунта? Зарегистрируйтесь"}
                    </p>

                    <Dialog.Close asChild>
                        <button
                            className="absolute right-2.5 top-2.5 inline-flex size-[25px] items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:outline-none"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};