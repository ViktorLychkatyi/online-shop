import {Navigation} from "./Navigation";

export function OnNavigation({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}