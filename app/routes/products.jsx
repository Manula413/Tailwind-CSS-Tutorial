import { json } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { getLogos, getProducts } from "../services/products.service";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

export const loader = async () => {
    const products = await getProducts(1, 4);
    const logos = await getLogos();
    return json({ products, logos });
};

export const action = async ({ request }) => {
    const formData = await request.formData();
    const page = Number(formData.get("page"));
    
    const products = await getProducts(1, page * 4); 

    return json({ products });
};

export default function ProductDisplay() {
    const { products: initialProducts, logos } = useLoaderData();
    const fetcher = useFetcher();

    const [products, setProducts] = useState(initialProducts);
    const [page, setPage] = useState(2); // Next page to fetch
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (fetcher.data?.products) {
            setProducts(fetcher.data.products); 
            setPage(prevPage => prevPage + 1);
            setIsLoading(false);
        }
    }, [fetcher.data]);

    const loadMore = () => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("page", page);
        fetcher.submit(formData, { method: "post" });
    };

    return (
        <main className="p-8 bg-white">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Today's Featured Brands</h2>
            <div className="flex flex-wrap justify-center space-x-6 mb-8">
                {logos.map((logo) => (
                    <img key={logo.id} className="h-10" src={`/images/${logo.url}`} alt={`Brand ${logo.id}`} />
                ))}
            </div>

            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Today's Featured Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-6 text-center">
                <button
                    onClick={loadMore}
                    className={`bg-gray-900 text-white px-6 py-2 rounded-lg transition duration-300 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "View More"}
                </button>
            </div>
        </main>
    );
}
