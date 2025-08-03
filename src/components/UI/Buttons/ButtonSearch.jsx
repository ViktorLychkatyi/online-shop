export function ButtonSearch(){
    return (
        <form className="w-full max-w-3xl flex justify-end items-center gap-2">
            <input
                type="text"
                placeholder="Поиск"
                className="w-full text-black bg-white border border-mid-gray rounded-4xl h-15 p-4  focus:border-tiny focus:ring-1 focus:border-2 focus:outline-none"
            />
            <button
                type="submit"
                className="bg-tiny text-white flex items-center justify-center p-4 w-20 absolute rounded-4xl "
            >
                <img src="svg/search.svg" alt=""/>
            </button>
        </form>

    )
}