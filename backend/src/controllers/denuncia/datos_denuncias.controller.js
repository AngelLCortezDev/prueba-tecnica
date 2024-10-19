import { Datos_Denuncia } from "../../models/denuncia/datos_denuncia.model.js";

export const getDatos_Denuncia = async (req, res) => {
    try {
        const { id } = req.params;
        const datos_denuncia = await Datos_Denuncia.findOne({
            where:{
                id_datos_denuncia: id
            }
        });

        if(!datos_denuncia){
            return res.status(404).json({message:"No se encontro ningun registro"});
        }

        res.json(datos_denuncia);

    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
}