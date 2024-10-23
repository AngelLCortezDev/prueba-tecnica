import { Router } from "express";
import { createMensaje } from "../../controllers/denuncia/mensajes.controller.js";

const router = Router();

router.post('/denuncias/detalle_denuncia/mensajes',createMensaje);

export default router;
