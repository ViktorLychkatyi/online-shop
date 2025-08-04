export function CartOrder() {
    return (
        <div className="bg-white flex flex-col gap-1 p-4 gap-3 rounded-2xl">
            <button className="w-xs bg-tiny hover:bg-hover-tiny cursor-pointer text-white text-xl font-semibold rounded-4xl p-3 mt-3">Перейти к оформлению</button>
            <p>Товары на сумму  <b>20 000</b></p>
            <p>Скидка  <b>20 000</b></p>
            <p>Общая сумма  <b className="text-5xl">20 000</b></p>
        </div>
    )
}