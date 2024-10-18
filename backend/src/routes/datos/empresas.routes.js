import { Router } from 'express';
import { getEmpresas, getEmpresa } from '../../controllers/datos/empresas.controller.js';

const router = Router();

router.get('/empresas',getEmpresas);
router.get('/empresas/:id',getEmpresa);

export default router;