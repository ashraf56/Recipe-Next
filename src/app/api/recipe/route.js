import { connectToDatabase } from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {

    const recipiData = await request.json();
    
    const { db } = await connectToDatabase();
    try {

        const result = await db.collection('Recipes').insertOne(recipiData);
        console.log(result);
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}

export const GET = async () => {

    const { db } = await connectToDatabase();
    try {
        const result = await db.collection('Recipes').find().toArray();
        return NextResponse.json(result);

    } catch (err) {
        return NextResponse.json({ message: err.toString() });
    }
}
