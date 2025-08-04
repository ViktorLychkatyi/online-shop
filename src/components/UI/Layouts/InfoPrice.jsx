export function InfoPrice() {
    return (
        <div className="bg-white flex flex-col gap-1 p-4 rounded-2xl">
            <h3 className="text-2xl text-dark-gray line-through">15 000 грн</h3>
            <h2 className="text-4xl text-red font-semibold">15 000 грн</h2>
            <button className="w-xs bg-tiny hover:bg-hover-tiny cursor-pointer text-white text-xl font-semibold rounded-4xl p-3 mt-3">Добавить в корзину</button>
        </div>
    )
}