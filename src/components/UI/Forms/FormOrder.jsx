export function FormOrder() {
    return (
        <>
            <form action="" className="w-6xl container flex flex-col p-4 gap-4 bg-white ">
                <div className="flex flex-row gap-4">
                    <input type="text" placeholder="Полное имя" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                    <input type="text" placeholder="Страна, город" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                </div>
                <div className="flex flex-row gap-4">
                    <input type="text" placeholder="Номер телефона" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                    <input type="text" placeholder="Страна" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                </div>
                <input type="text" placeholder="Адрес проживания" className="border border-gray rounded-4xl p-4 focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                <div className="flex flex-row gap-4">
                    <input type="text" placeholder="Номер телефона" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                    <input type="text" placeholder="mm / yy" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                    <input type="text" placeholder="cvv" className="border border-gray rounded-4xl p-4 w-full focus:outline-none focus:border-tiny focus:ring-1 focus:ring-tiny"/>
                </div>
            </form>
        </>
    )
}