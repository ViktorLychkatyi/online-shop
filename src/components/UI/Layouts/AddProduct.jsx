import * as React from "react";

export function AddProduct() {
    return (
        <>
            <div className="w-full bg-white h-screen flex flex-col gap-4 p-4">
                <h2 className="text-4xl font-semibold mt-2">Добавить продукт</h2>
                <form action="" className="flex flex-row gap-4 p-4">
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Имя продукта" className="w-xl h-[50px] rounded-4xl px-3 text-violet11 shadow border focus:outline-none focus:ring focus:ring-violet8"/>
                        <textarea placeholder="Описание товара" name="" id="" cols="30" rows="10" className="w-xl border border-dark-gray rounded-2xl p-4"></textarea>
                    </div>
                    <div className="w-xl h-xl flex flex-col justify-center items-center gap-4 border border-dark-gray rounded-4xl p-60 hover:bg-light-gray cursor-pointer">
                        <img src="svg/bxs_category_dark.svg" alt="" width="48px"/>
                        <p className="text-center w-xl">Добавить изображние</p>
                    </div>
                </form>
            </div>
        </>
    )
}