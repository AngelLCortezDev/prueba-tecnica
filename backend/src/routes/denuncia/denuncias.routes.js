import { Router } from "express";
import { createDenuncia, loginDenuncia } from "../../controllers/denuncia/denuncias.controller.js"

const router = Router();

router.post('/denuncias', createDenuncia);
router.post('/denuncias/seguimiento', loginDenuncia);

export default router;