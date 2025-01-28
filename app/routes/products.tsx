import { Link } from "@remix-run/react";
import "../tailwind.css";

export default function ProductDisplay() {
    return (
        <main className="p-8 bg-white">
            {/* Featured Brands */}
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Today's Featured Brands</h2><br />
            <div className="flex flex-wrap justify-center space-x-6 mb-8">
                <img className="h-10" src="/images/logo_1.png" alt="Haier" />
                <img className="h-10" src="/images/logo_2.png" alt="Whirlpool" />
                <img className="h-10" src="/images/logo_3.png" alt="Gaggenau" />
                <img className="h-10" src="/images/logo_4.png" alt="Electrolux" />
                <img className="h-10" src="/images/logo_5.png" alt="LG" />
            </div>


            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Today's Featured Items</h2><br />

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Product 1 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-xl p-3 w-full relative flex justify-center">
                        <img className="w-56 h-56 object-cover rounded-lg" src="/images/product_1.jpg" alt="Instax Mini 11" />
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2 w-full px-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-gray-800">9-in-1 Electric Pressure Cooker 6 Qt</h3>
                            <p className="text-base font-bold text-gray-800">$109.99</p>
                        </div>
                        <p className="text-xs text-gray-500">Programmable Multi-Function Cooker with Safer Vent, Olla de Presion, Rice Cooker, Slow Cooker, Steamer, Sauté, Warmer & Sterilizer, 1000W, Stainless Steel</p>
                        <div className="flex items-center mt-2">
                            {/* Full Stars */}
                            {[...Array(Math.floor(5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            {/* Half Star */}
                            {5 % 1 !== 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 relative" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                    <path className="absolute left-0 top-0" d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3" fill="white" />
                                </svg>
                            )}

                            {/* Empty Stars */}
                            {[...Array(5 - Math.ceil(5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            <span className="text-gray-500 text-xs ml-1">(150)</span>
                        </div>
                        <button className="mt-3 border border-black text-black px-4 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-xl p-3 w-full relative flex justify-center">
                        <img className="w-56 h-56 object-cover rounded-lg" src="/images/product_2.jpg" alt="Instax Mini 11" />
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2 w-full px-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-gray-800">Instant Pot RIO, 7-in-1 Electric Multi-Cooker</h3>
                            <p className="text-base font-bold text-gray-800">$99.95</p>
                        </div>
                        <p className="text-xs text-gray-500">Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, & Warmer, Includes App With Over 800 Recipes, 6 Quart</p>
                        <div className="flex items-center mt-2">
                            {/* Full Stars */}
                            {[...Array(Math.floor(4.5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            {/* Half Star */}
                            {3.5 % 1 !== 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 relative" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                    <path className="absolute left-0 top-0" d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3" fill="white" />
                                </svg>
                            )}

                            {/* Empty Stars */}
                            {[...Array(5 - Math.ceil(4.5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            <span className="text-gray-500 text-xs ml-1">(150)</span>
                        </div>
                        <button className="mt-3 border border-black text-black px-4 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>



                {/* Product 3 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-xl p-3 w-full relative flex justify-center">
                        <img className="w-56 h-56 object-cover rounded-lg" src="/images/product_3.jpg" alt="Instax Mini 11" />
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2 w-full px-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-gray-800">Aroma Housewares Aroma 6-cup</h3>
                            <p className="text-base font-bold text-gray-800">$19.99</p>
                        </div>
                        <p className="text-xs text-gray-500"> One Touch Rice Cooker, White (ARC-363NG), 6 cup cooked/ 3 cup uncook/ 1.5 Qt</p>
                        <div className="flex items-center mt-2">
                            {/* Full Stars */}
                            {[...Array(Math.floor(4.5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            {/* Half Star */}
                            {4.5 % 1 !== 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 relative" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                    <path className="absolute left-0 top-0" d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3" fill="white" />
                                </svg>
                            )}

                            {/* Empty Stars */}
                            {[...Array(5 - Math.ceil(4.5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            <span className="text-gray-500 text-xs ml-1">(150)</span>
                        </div>
                        <button className="mt-3 border border-black text-black px-4 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Product 4 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white shadow-md rounded-xl p-3 w-full relative flex justify-center">
                        <img className="w-56 h-56 object-cover rounded-lg" src="/images/product_4.jpg" alt="Instax Mini 11" />
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2 w-full px-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-gray-800">Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker</h3>
                            <p className="text-base font-bold text-gray-800">$69.99</p>
                        </div>
                        <p className="text-xs text-gray-500">Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Includes App With Over 800 Recipes, Stainless Steel, 6 Quart</p>
                        <div className="flex items-center mt-2">
                            {/* Full Stars */}
                            {[...Array(Math.floor(5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            {/* Half Star */}
                            {5 % 1 !== 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 relative" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                    <path className="absolute left-0 top-0" d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3" fill="white" />
                                </svg>
                            )}

                            {/* Empty Stars */}
                            {[...Array(5 - Math.ceil(5))].map((_, j) => (
                                <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 15.27L15.18 18l-1.64-5.47L18 8.24l-5.53-.45L10 3 7.53 7.79 2 8.24l4.46 4.29L4.82 18z" />
                                </svg>
                            ))}

                            <span className="text-gray-500 text-xs ml-1">(150)</span>
                        </div>
                        <button className="mt-3 border border-black text-black px-4 py-1 rounded-lg hover:bg-gray-100 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>


            {/* View More Button */}
            <div className="mt-6 text-center">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                    View More
                </button>
            </div>
        </main>
    );
}
