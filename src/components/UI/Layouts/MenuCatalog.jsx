import {CardCatalog} from "../Cards/CardCatalog.jsx";

export function MenuCatalog() {
    return (
        <>
            <div className="bg-white w-6xl h-screen rounded-2xl">
                <h2 className="text-4xl font-semibold p-4">Catalog</h2>
                <div className="flex flex-row flex-wrap gap-5 p-0 pt-0">
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                    <CardCatalog/>
                </div>
            </div>
        </>
    )
}