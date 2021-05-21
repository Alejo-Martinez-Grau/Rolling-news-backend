import {Router} from 'express';

const router = Router();

//rutas
router.route('/').get( (req, res) => {
    res.send('Hola desde el servidor');
});

export default router;