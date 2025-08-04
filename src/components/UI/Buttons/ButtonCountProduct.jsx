export function ButtonCountProduct() {
    return (
        <button
            className="w-50 h-15 border border-mid-gray flex items-center justify-between p-4 rounded-4xl shrink-0">
            <img src="svg/akar-icons_minus.svg" alt="Избранное" className="w-9 cursor-pointer"/>
            <p className="text-2xl font-semibold">1</p>
            <img src="svg/cuida_plus-outline.svg" alt="Избранное" className="w-9 h-9 cursor-pointer"/>
        </button>
    )
}