import {BrowserRouter as Router, Routes, Route, NavLink, Link} from 'react-router';
import { useParams } from 'react-router';
import products from '../../../data/products.json';

export function ImageProduct() {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    return (
        <>
            <div className="bg-white w-xl h-[465px] flex justify-center rounded-2xl"><img src={product.image} alt={product.title} className="max-h-full object-contain rounded-2xl"/></div>
        </>
    )
}