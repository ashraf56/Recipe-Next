import { connectToDatabase } from "@/util/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
    const { db } = await connectToDatabase();

    try {
        const query = { _id: new ObjectId(id) };
        const result = await db.collection('Recipes').findOne(query);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}

export async function PUT(request, { params }) {
    const { id } = params;
    let {
        Newtitle: title,
        Newinstruction: instruction,
        Newingredients: ingredients,

    } = await request.json()
    const { db } = await connectToDatabase();
    const result = await db.collection('Recipes').updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title, instruction, ingredients
            }
        }
    );
    return NextResponse.json(result, { message: "Updated" })
}