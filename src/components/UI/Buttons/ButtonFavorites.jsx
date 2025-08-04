export function ButtonFavorites(){
    return (
        <button
            className="w-15 h-15 bg-light-gray hover:bg-hover-light-gray cursor-pointer flex items-center justify-center rounded-4xl shrink-0">
            <img src="svg/solar_heart-bold.svg" alt="Избранное" className="w-9 h-9"/>
        </button>
    )
}