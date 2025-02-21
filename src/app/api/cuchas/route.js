import connectToDatabase from "@/lib/mongodb"
import Cucha from "@/models/Cucha";
import { NextResponse } from "next/server";

export const GET = async () => {
    await connectToDatabase();

    const cuchas = await Cucha.find();

    return NextResponse.json({cuchas})
}

export const POST = async (request) => {
    await connectToDatabase();

    const { material, nombre_mascota} = await request.json();

    const newCucha = new Cucha({ material, nombre_mascota });

    await newCucha.save();

    return NextResponse.json({message: "Cucha creada!", cucha: newCucha})
}