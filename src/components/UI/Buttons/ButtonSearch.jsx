export function ButtonSearch(){
    return (
        <form className="w-full max-w-3xl flex justify-end items-center gap-2">
            <input
                type="text"
                placeholder="Поиск"
                className="w-full text-black bg-white border border-mid-gray rounded-4xl h-15 p-4
             focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"
            />

            <button
                type="submit"
                className="bg-tiny hover:bg-hover-tiny cursor-pointer text-white flex items-center justify-center p-4 w-20 absolute rounded-4xl "
            >
                <img src="svg/search.svg" alt=""/>
            </button>
        </form>

    )
}