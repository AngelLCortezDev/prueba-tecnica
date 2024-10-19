import { Router } from "express";
import { createMensaje } from "../../controllers/denuncia/mensajes.controller.js";

const router = Router();

router.post('/mensajes',createMensaje);

export default router;
