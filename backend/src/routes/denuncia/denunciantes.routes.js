import { Router } from 'express';
import { getDenunciante } from "../../controllers/denuncia/denunciantes.controller.js";

const router = Router();

router.get('/denuncias/denunciantes/:id', getDenunciante);

export default router;