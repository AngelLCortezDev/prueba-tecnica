import { Denuncia } from "../../models/denuncia/denuncia.model.js";
import { integrar_denuncia } from "../../services/integrar_denuncia.service.js";

export const createDenuncia = async (req,res) => {
    try {
        const { folio,password,datos_denuncia,denunciante,detalle_denuncia } = await integrar_denuncia(req.body);
        const newDenuncia = await Denuncia.create({
            folio,
            password,
            datos_denuncia,
            denunciante,
            detalle_denuncia
        });
        res.json(newDenuncia);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}