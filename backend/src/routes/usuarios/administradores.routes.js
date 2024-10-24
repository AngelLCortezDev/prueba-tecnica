import { Router } from "express";
import { loginAdmin } from "../../controllers/usuarios/administradores.controller.js";

const router = Router();

router.post('/admin', loginAdmin);

export default router;