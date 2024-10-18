import { Estado } from "../../models/datos/estado.model.js";

export const getEstados = async (req, res) => {
    try {
        const estados = await Estado.findAll();
        res.json(estados);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const estado = await Estado.findOne({
            where:{
                id_estado: id
            }
        });

        if(!estado){
            return res.status(404).json({message: "No se encontró el estado"});
        }

        res.json(estado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};