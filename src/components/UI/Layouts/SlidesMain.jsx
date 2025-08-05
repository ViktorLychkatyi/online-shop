import { useState, useEffect } from "react";

const banners = [
    "img/banner1.jpg",
    "img/banner2.jpg",
    "img/banner3.jpg",
];

export function SlidesMain() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative container mx-auto h-[500px] overflow-hidden rounded-2xl mb-4">
            <div className="w-full h-full transition-all duration-700 ease-in-out">
                <img
                    src={banners[currentIndex]}
                    alt={`Слайд ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white-transparent hover:bg-hover-white-transparent text-black p-3 rounded-full cursor-pointer"
            >
                <img src="svg/left.svg" alt="Prev" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white-transparent hover:bg-hover-white-transparent text-black p-3 rounded-full cursor-pointer"
            >
                <img src="svg/right.svg" alt="Next" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {banners.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                            currentIndex === i ? "bg-white" : "bg-white/50"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
