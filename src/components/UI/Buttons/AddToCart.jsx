import * as React from "react";
import { Toast } from "radix-ui";

export const AddToCart = ({ buttonText, product }) => {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const handleAddToCart = () => {
        // Получаем корзину
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Проверяем, есть ли товар
        const exist = cart.find(item => item.id === product.id);

        if (exist) {
            // Увеличиваем количество
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            // Добавляем новый товар
            cart.push({ ...product, quantity: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        // Показываем тост
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
        }, 100);
    };

    return (
        <Toast.Provider swipeDirection="right">
            <button
                className="w-full bg-tiny hover:bg-hover-tiny cursor-pointer text-white text-xl font-semibold p-3 rounded-4xl"
                onClick={handleAddToCart}
            >
                {buttonText}
            </button>

            <Toast.Root
                className="grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-light-tiny text-black p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
                open={open}
                onOpenChange={setOpen}
            >
                <Toast.Title className="text-[15px] font-medium text-slate12 [grid-area:_title]">
                    Добавлено в корзину
                </Toast.Title>
            </Toast.Root>

            <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
        </Toast.Provider>
    );
};

function oneWeekAway(date) {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
}
