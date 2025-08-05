import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";

export const ButtonCabinet = () => {
    const [isRegister, setIsRegister] = React.useState(false);

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="bg-light-gray hover:bg-hover-light-gray cursor-pointer text-black flex flex-row items-center justify-center gap-2 text-xl p-3 pl-4 pr-4 rounded-4xl font-semibold shrink-0">
                    <img src="svg/heroicons-outline_user.svg" alt="" />Войти
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="bg-[#1212124D] fixed inset-0 data-[state=open]:animate-overlayShow" />
                <Dialog.Content className="bg-white fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-lg focus:outline-none data-[state=open]:animate-contentShow">

                    <Dialog.Title className="m-0 mb-4 text-[24px] font-medium text-mauve12 text-center">
                        {isRegister ? "Регистрация" : "Войти"}
                    </Dialog.Title>

                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
                            placeholder="Электронная почта"
                        />
                    </fieldset>


                    {isRegister && (
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <input
                                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
                                placeholder="Номер телефона"
                            />
                        </fieldset>
                    )}

                    {isRegister && (
                        <fieldset className="mb-[15px] flex items-center gap-5">
                            <input
                                className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
                                placeholder="Имя пользователя"
                            />
                        </fieldset>
                    )}

                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <input
                            className="w-full h-[50px] rounded-4xl px-3 text-[15px] text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"
                            type="password"
                            placeholder="Пароль"
                        />
                    </fieldset>

                    <div className="mt-6 flex justify-center">
                        <Dialog.Close asChild>
                            <button className="bg-tiny text-white w-full h-[50px] rounded-4xl font-medium hover:bg-opacity-90">
                                {isRegister ? "Зарегистрироваться" : "Войти"}
                            </button>
                        </Dialog.Close>
                    </div>

                    <p
                        onClick={() => setIsRegister(!isRegister)}
                        className="mt-4 text-[14px] text-center text-blue-600 cursor-pointer hover:underline"
                    >
                        {isRegister ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрируйтесь"}
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
