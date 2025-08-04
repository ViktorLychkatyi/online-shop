import {CardProduct} from "../Cards/CardProduct.jsx";

export function TotalProducts() {
    return (
        <div className={"container mx-auto"}>
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