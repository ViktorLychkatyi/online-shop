import {ListCatalog} from "../components/UI/Layouts/ListCatalog.jsx";
import {Footer} from "../components/UI/Layouts/Footer.jsx";
import {MenuCatalog} from "../components/UI/Layouts/MenuCatalog.jsx";
import {Navigation} from "../components/UI/Layouts/Navigation.jsx";

export function Catalog() {
    return (
        <>
            <Navigation/>
            <div className="container m-auto w-full flex flex-row justify-center gap-5">
                <ListCatalog/>
                <MenuCatalog/>
            </div>
            <Footer/>
        </>
    )
}