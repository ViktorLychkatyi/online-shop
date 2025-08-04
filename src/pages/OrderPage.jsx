import {MinNavigation} from "../components/UI/Layouts/MinNavigation.jsx";
import {CartOrder} from "../components/UI/Layouts/CartOrder.jsx";
import {FormOrder} from "../components/UI/Forms/FormOrder.jsx";

export function OrderPage() {
    return (
        <>
            <MinNavigation/>
            <h2 className="container m-auto text-4xl font-semibold mt-8 mt-2 mb-2">Платеж</h2>
            <div className="container m-auto flex flex-row gap-4">
                <div>
                    <FormOrder/>
                </div>
                <div>
                    <CartOrder/>
                </div>
            </div>
        </>
    )
}