import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export const GET = async (request, context) => {
    await connectToDatabase();

    const params = await context.params; // Esperar a que params se resuelva

    try {
        const userId = params?.userId; 

        if (!userId) {
            return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
        }

        const user = await User.findById(userId); // Buscar usuario en MongoDB

        if (!user) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
    }
};

// PUT: Actualizar un usuario
export const PUT = async (request, context) => {
    await connectToDatabase();

    const params = await context.params;

    const { first_name, last_name, email } = await request.json();

    try {
        const updatedUser = await User.findByIdAndUpdate(params.userId, { first_name, last_name, email }, { new: true });
        if (!updatedUser) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ message: "Usuario actualizado!", updatedUser });
    } catch (error) {
        console.error("Error al actualizar usuario:", error);
        return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
    }
};


// DELETE: Eliminar un usuario
export const DELETE = async (request, context) => {
    await connectToDatabase();

    const params = await context.params;

    try {
        const user = await User.findByIdAndDelete(params.userId); // Eliminar usuario por ID
        if (!user) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        return NextResponse.json({ message: "Usuario eliminado", user });
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
        return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
    }
};

