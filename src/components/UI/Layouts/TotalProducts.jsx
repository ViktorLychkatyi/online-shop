import {CardProduct} from "../Cards/CardProduct.jsx";
import products from "../../../data/products.json";

export function TotalProducts() {
    return (
        <div className={"container w-full mx-auto"}>
            <div className="flex flex-row justify-center gap-5 flex-wrap">
                {products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}