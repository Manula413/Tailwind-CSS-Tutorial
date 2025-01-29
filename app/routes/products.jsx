import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProducts } from "../services/products.service";
import ProductCard from "../components/ProductCard"; // Importing the extracted component

import "../tailwind.css";

export const loader = async () => {
    const products = getProducts();
    return json({ products });
};

export default function ProductDisplay() {
    const { products } = useLoaderData();

    return (
        <main className="p-8 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Today's Featured Brands</h2>
            <div className="flex flex-wrap justify-center space-x-6 mb-8">
                {["logo_1.png", "logo_2.png", "logo_3.png", "logo_4.png", "logo_5.png"].map((logo, index) => (
                    <img key={index} className="h-10" src={`/images/${logo}`} alt={`Brand ${index + 1}`} />
                ))}
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Today's Featured Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="mt-6 text-center">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
                    View More
                </button>
            </div>
        </main>
    );
}
