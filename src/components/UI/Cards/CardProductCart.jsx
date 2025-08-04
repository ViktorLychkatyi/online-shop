import {ButtonFavoriteCart} from "../Buttons/ButtonFavoriteCart.jsx";
import {ButtonRemoveProduct} from "../Buttons/ButtonRemoveProduct.jsx";
import {CardNameCatalog} from "../Cards/CardNameCatalog.jsx";
import {CartOrder} from "../Layouts/CartOrder.jsx";
import {ButtonCountProduct} from "../Buttons/ButtonCountProduct.jsx";

export function CardProductCart() {
    return (
        <div className="w-8xl bg-white flex rounded-2xl">
            <img src="img/Rectangle 105.jpg" alt="" className="w-50"/>
            <div className="flex flex-row">
                <p></p>
                <div className="w-4xl p-4">
                    <div className="flex flex-row">
                        <p className="line-clamp-3 text-xl font-semibold">Lenovo Legion 5 16IRX9 Игровой ноутбук 16", Intel Core i7-14650HX, RAM 32 ГБ, SSD 1024 ГБ, NVIDIA GeForce RTX 4060 (8 Гб), Без системы, (83DG004DRK), серый, Русская раскладка</p>
                        <div className="flex flex-col w-xl gap-1 p-4 pt-0 rounded-2xl">
                            <h3 className="text-2xl text-dark-gray line-through">15 000 грн</h3>
                            <h2 className="text-4xl text-red font-semibold">15 000 грн</h2>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 mt-4 justify-between">
                        <div className="flex flex-row gap-4">
                            <ButtonFavoriteCart/>
                            <ButtonRemoveProduct/>
                        </div>
                        <div>
                            <ButtonCountProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}