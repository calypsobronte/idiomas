import Datos from "../models/Datos";

export const createDatos = async (req, res) => {
    try {
        const { name, idioma, message } = req.body;

        // creating a new data
        const datos = new Datos({
            name,
            idioma,
            message
        });
        // saving the new Data
        const savedDatos = await datos.save();
        return res.status(200).json(savedDatos);
    } catch (error) {
        console.error(error);
    }
};


export const getDatos = async (req, res) => {
    try {
        await Datos.find({}, (err, dataList) => {
            return res.status(200).json(dataList);
          });
    } catch (error) {
        console.error(error);
    }
}