import {Navigation} from "../components/UI/Layouts/Navigation.jsx";
import {ImageProduct} from "../components/UI/Layouts/ImageProduct.jsx";
import {InfoProduct} from "../components/UI/Layouts/InfoProduct.jsx";
import {InfoPrice} from "../components/UI/Layouts/InfoPrice.jsx";

export function ProductPage() {
    return (
        <>
            <Navigation/>
            <p className="container m-auto text-dark-gray text-base mt-2 mb-2">Главная / Электроника / Ноутбуки и компьютеры / Ноутбуки / Lenovo</p>
            <div className="container m-auto flex flex-row gap-5">
                <div className="container bg-white rounded-2xl h-auto">
                    <ImageProduct/>
                </div>
                <div className="container bg-white rounded-2xl">
                    <InfoProduct/>
                </div>
                <div className="container bg-white h-20 w-xl rounded-2xl">
                    <InfoPrice/>
                </div>
            </div>
        </>
    )
}