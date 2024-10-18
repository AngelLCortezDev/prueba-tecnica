import {Router} from 'express';
const router = Router();

router.get('/paises');
router.get('/paises/:id');

export default router;