import {Pais} from "../../models/datos/pais.model.js";
import {Estado} from "../../models/datos/estado.model.js";

export const getPaises = async (req, res) => {
    try{
        const paises = await Pais.findAll();
        res.json(paises);
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
};

export const getPais = async (req, res) => {
    try{
        const { id } = req.params;
        const pais = await Pais.findOne({
            where: {
                id_pais: id
            }
        });

        if (!pais){
            return res.status(404).json({ message: "El pais no existe." });
        }
        res.json(pais);
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}

export const getPais_Estados = async (req, res) => {
    try {
        const { id } = req.params;
        const estados= await Estado.findAll({
            where:{
                pais: id
            }
        });

        if(!estados){
            return res.status(404).json({message: "No se encontraron mensajes"});
        }
        
        res.json(estados);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}