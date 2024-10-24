import { Router } from "express";
import { getDetalle_Denuncia, getDetalle_Denuncia_Mensajes, putDetalle_Denuncia } from "../../controllers/denuncia/detalles_denuncias.controller.js";

const router = Router();

router.get('/denuncias/detalle_denuncia/:id', getDetalle_Denuncia);
router.get('/denuncias/detalle_denuncia/mensajes/:id', getDetalle_Denuncia_Mensajes);
router.put('/denuncias/detalle_denuncia/:id', putDetalle_Denuncia);

export default router;