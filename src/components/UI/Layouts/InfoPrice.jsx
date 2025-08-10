import {AddToCart2} from "../Buttons/AddToCart2.jsx";
import {useParams} from "react-router";
import products from '../../../../public/data/products.json';

export function InfoPrice() {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    return (
        <div className="bg-white flex flex-col gap-1 p-4 rounded-2xl">
            <h3 className="text-2xl text-dark-gray line-through">{product.price} грн</h3>
            <h2 className="text-4xl text-red font-semibold">{product.discount} грн</h2>
            <AddToCart2 buttonText="Добавить в корзину"/>
        </div>
    )
}