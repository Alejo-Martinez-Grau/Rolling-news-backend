import {Router} from "express";
import adminUserCtrl from '../controllers/adminUser.controller';

const router = Router();

router.route("/admin").get(adminUserCtrl.listarAdmins);

export default router;