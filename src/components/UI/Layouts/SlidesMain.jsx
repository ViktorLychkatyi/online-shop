export function SlidesMain() {
    return (
        <div className={"container mx-auto h-[500px] bg-light-tiny rounded-2xl"}>
            <div className={"flex flex-row justify-between p-5 relative top-50"}>
                <img src="svg/left.svg" alt="" className={"bg-white-transparent items-center justify-center gap-3" +
                    " text-xl p-3 pl-3 pr-3 rounded-4xl"}/>
                <img src="svg/right.svg" alt="" className={"bg-white-transparent items-center justify-center gap-3" +
                    " text-xl p-3 pl-3 pr-3 rounded-4xl"}/>
            </div>
        </div>
    )
}