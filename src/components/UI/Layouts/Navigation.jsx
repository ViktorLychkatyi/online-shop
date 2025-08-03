import {ButtonLogo} from "../Buttons/ButtonLogo.jsx";
import {ButtonCatalog} from "../Buttons/ButtonCatalog.jsx";
import {ButtonSearch} from "../Buttons/ButtonSearch.jsx";
import {ButtonCabinet} from "../Buttons/ButtonCabinet.jsx";
import {ButtonFavorites} from "../Buttons/ButtonFavorites.jsx";
import {ButtonCart} from "../Buttons/ButtonCart.jsx";

export function Navigation() {
    return (
        <>
            <div className={"flex m-auto bg-color-bg text-white justify-center items-center" +
                " gap-5 p-5 z-10"}>
                <ButtonLogo/>
                <ButtonCatalog/>
                <ButtonSearch/>
                <ButtonCabinet/>
                <ButtonFavorites/>
                <ButtonCart/>
            </div>
        </>
    )
}
