import connectToDatabase from "@/lib/mongodb"
import Cucha from "@/models/Cucha";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
    await connectToDatabase();

    const params = await context.params;

    const cuchaId = params?.cuchaId;

    if (!cuchaId) {
        return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 })
    }

    const cucha = await Cucha.findById(cuchaId);

    if (!cucha) {
        return NextResponse.json({ error: "Cucha no encontrada" }, { status: 404 });
    }

    return NextResponse.json({ cucha });
}

export const PUT = async (request, context) => {
    await connectToDatabase();

    const params = await context.params;

    const { material, nombre_mascota } = await request.json();

    try {
        const updatedCucha = await Cucha.findByIdAndUpdate(params.cuchaId, { material, nombre_mascota }, { new: true });
        if (!updatedCucha) {
            return NextResponse.json({ error: "Cucha no encontrada" }, { status: 404 });
        }

        return NextResponse.json({ message: "Cucha actualizada!", updatedCucha });
    } catch (error) {
        console.error("Error al actualizar cucha:", error);
        return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
    }
};


// DELETE: Eliminar un usuario
export const DELETE = async (request, context) => {
    await connectToDatabase();

    const params = await context.params;

    try {
        const cucha = await Cucha.findByIdAndDelete(params.cuchaId); // Eliminar usuario por ID
        if (!cucha) {
            return NextResponse.json({ error: "Cucha no encontrada" }, { status: 404 });
        }

        return NextResponse.json({ message: "Cucha eliminada", cucha });
    } catch (error) {
        console.error("Error al eliminar cucha:", error);
        return NextResponse.json({ error: "Error del servidor" }, { status: 500 });
    }
};


