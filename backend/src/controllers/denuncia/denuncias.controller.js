import { Denuncia } from "../../models/denuncia/denuncia.model.js";
import { integrar_denuncia } from "../../services/integrar_denuncia.service.js";
import { autenticar_folio } from "../../services/auth/auth_folio.service.js";

export const createDenuncia = async (req,res) => {
    try {
        const integratedDenuncia = await integrar_denuncia(req.body);
        console.log(integratedDenuncia);
        const newDenuncia = await Denuncia.create({
            folio: integratedDenuncia.folio,
            password: integratedDenuncia.password,
            datos_denuncia: integratedDenuncia.datos_denuncia,
            denunciante: integratedDenuncia.denunciante,
            detalle_denuncia: integratedDenuncia.detalle_denuncia
        });
        console.log(newDenuncia);
        res.json(newDenuncia);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const loginDenuncia = async (req,res) => {
    try{
        const authDenuncia = await autenticar_folio(req.body);
        console.log(authDenuncia);
        if(authDenuncia){
            res.json(authDenuncia)
        }else{
            return res.status(401).json({message:"Credenciales invalidas."})
        }
    }catch(error){
        return res.status(500).json({message:error});
    }
}

export const getDenuncias = async (req,res) => {
    
}