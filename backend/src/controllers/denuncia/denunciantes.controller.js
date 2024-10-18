import { Denunciante } from "../../models/denuncia/denunciante.model.js";

export const getDenunciante = async (req, res) => {
    try{
        const { id } = req.params;
        const denunciante = await Denunciante.findOne({
            where:{
                id_denunciante:id
            }
        });

        if(!denunciante){
            return res.status(404).json({message:"No se encontro un denunciante"});
        }

        res.json(denunciante);

    }catch(error){
        return res.status(500).json({message:error.message});
    }
}