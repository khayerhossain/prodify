import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db("your_db_name");

        const product = await db
            .collection("products")
            .findOne({ _id: new ObjectId(params.id) }); // <-- must use ObjectId

        if (!product) return NextResponse.json({ message: "Product not found" }, { status: 404 });

        return NextResponse.json(product);
    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
