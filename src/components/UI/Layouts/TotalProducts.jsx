import {CardProduct} from "../Cards/CardProduct.jsx";

export function TotalProducts() {
    return (
        <div className={"container mx-auto"}>
            <h2 className={"text-4xl font-semibold mt-8 mt-2 mb-2"}>Товары</h2>
            <div className={"flex flex-row justify-center gap-5 flex-wrap"}>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
        </div>
    )
}