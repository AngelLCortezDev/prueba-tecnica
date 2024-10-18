import { Router } from "express";
import { createDenuncia } from "../../controllers/denuncia/denuncias.controller.js"

const router = Router();

router.post('/denuncias', createDenuncia);

export default router;