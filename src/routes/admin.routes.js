import {Router} from 'express';
import adminCtrl from '../controllers/admin.controllers'

const router = Router();

//rutas
router.route('/login').get(adminCtrl.getPrueba).post(adminCtrl.getAdmin);

export default router;