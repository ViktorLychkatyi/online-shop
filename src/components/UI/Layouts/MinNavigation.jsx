import {ButtonLogo} from "../Buttons/ButtonLogo.jsx";

export function MinNavigation() {
    return (
        <>
            <div className="flex m-auto bg-color-bg text-white justify-between items-center gap-5 p-5 z-10">
                <ButtonLogo/>
                <button className="w-60 bg-tiny hover:bg-hover-tiny cursor-pointer text-white text-xl font-semibold p-3 rounded-4xl mt-1">Нужна помощь?</button>
            </div>
        </>
    )
}