"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    model: string;
    brand: string;
    performance: string;
    country: string;
    image: string;
};

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/api/products/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error("AxiosError:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!product) return <p className="text-center mt-20">Product not found</p>;

    return (
        <div className="max-w-5xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full"
                    />
                </div>
                <div className="md:w-1/2">
                    <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <ul className="space-y-2 text-gray-800">
                        <li><strong>Brand:</strong> {product.brand}</li>
                        <li><strong>Model:</strong> {product.model}</li>
                        <li><strong>Performance:</strong> {product.performance}</li>
                        <li><strong>Country:</strong> {product.country}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
