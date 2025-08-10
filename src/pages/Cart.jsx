import {Navigation} from "../components/UI/Layouts/Navigation.jsx";
import {CardProductCart} from "../components/UI/Cards/CardProductCart.jsx";
import {CartOrder} from "../components/UI/Layouts/CartOrder.jsx";
import {TotalCart} from "../components/UI/Layouts/TotalCart.jsx";

export function Cart() {
    return (
        <>
            <h2 className="container m-auto text-4xl font-semibold mt-8 mt-2 mb-2">Корзина</h2>
            <div className="container m-auto flex flex-row gap-4">
                <TotalCart/>
            </div>
        </>
    )
}