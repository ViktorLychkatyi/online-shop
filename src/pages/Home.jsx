import {ButtonLogo} from "../components/UI/Buttons/ButtonLogo.jsx";
import {Navigation} from "../components/UI/Layouts/Navigation.jsx";
import {SlidesMain} from "../components/UI/Layouts/SlidesMain.jsx";
import {TotalProducts} from "../components/UI/Layouts/TotalProducts.jsx";
import {Footer} from "../components/UI/Layouts/Footer.jsx";

export function Home() {
    return (
        <>
            <Navigation/>
            <SlidesMain/>
            <TotalProducts/>
            <Footer/>
        </>
    )
}