import { Router } from "express";
import { getDetalle_Denuncia, getDetalle_Denuncia_Mensajes } from "../../controllers/denuncia/detalles_denuncias.controller.js";

const router = Router();

router.get('/detalle_denuncia/:id', getDetalle_Denuncia);
router.get('/detalle_denuncia/mensajes/:id', getDetalle_Denuncia_Mensajes)

export default router;