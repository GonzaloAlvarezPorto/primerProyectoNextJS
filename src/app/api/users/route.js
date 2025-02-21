import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

// GET: Obtener usuarios desde MongoDB
export const GET = async () => {
    await connectToDatabase();
    const users = await User.find();
    return NextResponse.json({ users });
};

// POST: Agregar un nuevo usuario a MongoDB
export const POST = async (request) => {
    await connectToDatabase();
    const { first_name, last_name, email } = await request.json();

    const nuevoUser = new User({ first_name, last_name, email });
    await nuevoUser.save();

    return NextResponse.json({ message: "Usuario creado!", user: nuevoUser });
};

// PUT: Actualizar un usuario
