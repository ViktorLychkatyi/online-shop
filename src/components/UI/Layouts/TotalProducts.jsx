import { CardProduct } from "../Cards/CardProduct.jsx";
import { useEffect, useState } from "react";

export function TotalProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Ошибка загрузки продуктов:", err));
    }, []);

    return (
        <div className="container w-full mx-auto">
            <div className="flex flex-row justify-center gap-5 flex-wrap">
                {products.map((product) => (
                    <div>
                        <CardProduct key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}