import { Detalle_Denuncia } from "../../models/denuncia/detalle_denuncia.model.js";
import { Mensaje } from '../../models/denuncia/mensaje.model.js';

export const getDetalle_Denuncia = async (req, res) => {
    try {
        const { id } = req.params;
        const detalle_denuncia = await Detalle_Denuncia.findOne({
            where:{
                id_detalle_denuncia: id
            }
        });

        if(!detalle_denuncia){
            return res.status(404).json({message: "No se encontró el registro"});
        }
        
        res.json(detalle_denuncia);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const getDetalle_Denuncia_Mensajes = async (req, res) => {
    try {
        const { id } = req.params;
        const mensajes = await Mensaje.findAll({
            where:{
                denuncia: id
            }
        });

        if(!mensajes){
            return res.status(404).json({message: "No se encontraron mensajes"});
        }
        
        res.json(mensajes);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export const putDetalle_Denuncia = async (req , res) => {
    try{
        const { id } = req.params;
        const { status } = req.body;
        
        const detalle_denuncia = await Detalle_Denuncia.findByPk(id);
        detalle_denuncia.status = status;
        detalle_denuncia.save();

        res.json(detalle_denuncia);

    }catch(error){
        return res.status(500).json({message: error.message});
    }
}