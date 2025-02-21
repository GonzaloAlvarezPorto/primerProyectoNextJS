import mongoose from "mongoose";

const CuchaSchema = new mongoose.Schema({
    material: String,
    nombre_mascota: String
});

export default mongoose.models.Cucha || mongoose.model("Cucha", CuchaSchema);
