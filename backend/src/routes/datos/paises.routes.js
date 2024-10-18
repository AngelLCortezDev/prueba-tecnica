import { Router } from 'express';
import { getPaises, getPais } from '../../controllers/datos/paises.controller.js';

const router = Router();

router.get('/paises', getPaises);
router.get('/paises/:id', getPais);

export default router;