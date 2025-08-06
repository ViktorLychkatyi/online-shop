import {Navigation} from "../components/UI/Layouts/Navigation.jsx";
import {CardProductCart} from "../components/UI/Cards/CardProductCart.jsx";
import {CartOrder} from "../components/UI/Layouts/CartOrder.jsx";

export function Cart() {
    return (
        <>
            <h2 className="container m-auto text-4xl font-semibold mt-8 mt-2 mb-2">Корзина</h2>
            <div className="container m-auto flex flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <CardProductCart/>
                    <CardProductCart/>
                    <CardProductCart/>
                    <CardProductCart/>
                </div>
                <div>
                    <CartOrder/>
                </div>
            </div>
        </>
    )
}