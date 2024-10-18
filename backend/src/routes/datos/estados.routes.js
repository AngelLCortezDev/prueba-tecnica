import { Router } from "express";
import { getEstados, getEstado } from "../../controllers/datos/estados.controller.js";

const router = Router();

router.get('/estados', getEstados);
router.get('/estados/:id', getEstado)

export default router;