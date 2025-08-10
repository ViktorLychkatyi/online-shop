import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import { useParams } from 'react-router';
import products from '../../../../public/data/products.json';

export function InfoProduct() {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    return (
        <>
        <div className="bg-white w-xl flex content-start gap-4 p-4 rounded-2xl">
            <h3 className="text-black text-2xl font-semibold line-clamp-3">{product.title}</h3>
        </div>
        <div className="p-4">
            <h4 className="text-2xl font-semibold">Информация</h4>
            <p className="text-base font-semibold mt-2 mb-2">{product.description}</p>
            <div className={"flex flex-row gap-5"}>
                <div className={"flex flex-row"}><img src="/svg/material-symbols_star-rounded.svg" alt=""/>{product.starsReview}</div>
                <div className={"flex flex-row gap-1 w-full"}><img src="/svg/Frame 15.svg" alt=""/>{product.countReview}</div>
            </div>
        </div>
        </>
    )
}