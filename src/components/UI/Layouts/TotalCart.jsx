import React, { useState, useEffect } from "react";
import { CardProductCart } from "../Cards/CardProductCart.jsx";
import { CartOrder } from "../Layouts/CartOrder.jsx";

export function TotalCart() {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartProducts(savedCart);
    }, []);

    const handleIncrease = (id) => {
        const updated = cartProducts.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        );
        setCartProducts(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const handleDecrease = (id) => {
        const updated = cartProducts
            .map(product =>
                product.id === id && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
            .filter(product => product.quantity > 0);
        setCartProducts(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    // Удалить товар
    const handleRemove = (id) => {
        const updated = cartProducts.filter(product => product.id !== id);
        setCartProducts(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    if (cartProducts.length === 0) {
        return <p>Корзина пуста</p>;
    }

    return (
        <>
            <div className="cart-list flex flex-col gap-4">
                {cartProducts.map(product => (
                    <CardProductCart
                        key={product.id}
                        product={product}
                        onIncrease={() => handleIncrease(product.id)}
                        onDecrease={() => handleDecrease(product.id)}
                        onRemove={() => handleRemove(product.id)}
                    />
                ))}
            </div>
        <CartOrder/>
        </>
    );
}
