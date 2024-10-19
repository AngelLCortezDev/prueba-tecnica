import { Router } from "express";
import { getDatos_Denuncia } from "../../controllers/denuncia/datos_denuncias.controller.js";

const router = Router();

router.get('/datos_denuncias/:id', getDatos_Denuncia);

export default router;