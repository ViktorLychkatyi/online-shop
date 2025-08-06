import {MinNavigation} from "../components/UI/Layouts/MinNavigation.jsx";
import {PayOrder} from "../components/UI/Layouts/PayOrder.jsx";
import {FormOrder} from "../components/UI/Forms/FormOrder.jsx";

export function Order() {
    return (
        <>
            <h2 className="container m-auto text-4xl font-semibold mt-8 mt-2 mb-2">Платеж</h2>
            <div className="container m-auto flex flex-row gap-4">
                <div>
                    <FormOrder/>
                </div>
                <div>
                    <PayOrder/>
                </div>
            </div>
        </>
    )
}