import {Mensaje} from '../../models/denuncia/mensaje.model.js';

export const createMensaje = async (req, res) => {
    const { contenido,denuncia } = req.body; 
    try {
        const newMensaje = await Mensaje.create({
            contenido,
            denuncia
        });
        res.json(newMensaje);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};