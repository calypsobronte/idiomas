import { Schema, model } from "mongoose";

const DatosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    idioma: {
        type: String,
    },
    message: {
        type: String,
    },
    create: { 
        type: Date, 
        default: Date.now
    }
});
export default model("Datos", DatosSchema);