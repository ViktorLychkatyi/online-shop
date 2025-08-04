export function SuccessfullyPage() {
    return (
        <>
            <div className="bg-white h-screen rounded-2xl flex flex-col justify-center items-center gap-5 p-5">
                <div className="text-black text-5xl font-bold mb-5">Спасибо за покупку!</div>
                <button className="w-xs bg-tiny hover:bg-hover-tiny cursor-pointer text-white text-xl font-semibold p-3 rounded-4xl mt-1">На главную страницу</button>
            </div>
        </>
    )
}