import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
    items: savedCart,
    totalPrice: savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalDiscount: savedCart.reduce((sum, item) => sum + (item.discount || 0) * item.quantity, 0),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existing = state.items.find(item => item.id === product.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }

            cartSlice.caseReducers.recalculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            cartSlice.caseReducers.recalculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {
            const { id, amount } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = Math.max(1, item.quantity + amount);
            }
            cartSlice.caseReducers.recalculateTotals(state);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        recalculateTotals(state) {
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
            state.totalDiscount = state.items.reduce((sum, item) => sum + (item.discount || 0) * item.quantity, 0);
        }
    }
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
