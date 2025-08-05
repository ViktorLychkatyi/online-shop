import * as React from "react";

export function AdminPanel() {
    return (
        <>
            <div className="w-xs bg-white h-screen flex flex-col items-center gap-4 p-4">
                <img src="svg/logo.svg" alt="" width="150px"/>
                <h2 className="text-2xl font-semibold mt-6 mb-6 w-xs text-center">Административная панель</h2>
                <div className="w-2xs bg-white p-2 flex flex-row gap-2 items-center hover:bg-light-gray cursor-pointer rounded-4xl"><img src="svg/bxs_category_dark.svg" alt=""/><p>Добавить продукт</p></div>
                <div className="w-2xs bg-white p-2 flex flex-row gap-2 items-center hover:bg-light-gray cursor-pointer rounded-4xl"><img src="svg/bxs_category_dark.svg" alt=""/><p>Выйти из аккаунта</p></div>
            </div>
        </>
    )
}