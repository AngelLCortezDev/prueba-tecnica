import { Router } from 'express';
import { getPaises, getPais, getPais_Estados } from '../../controllers/datos/paises.controller.js';

const router = Router();

router.get('/paises', getPaises);
router.get('/paises/:id', getPais);
router.get('/paises/estados/:id',getPais_Estados);

export default router;