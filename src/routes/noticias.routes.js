import { Router } from "express";
import noticiaCtrl from "../controllers/noticia.controllers";

const router = Router();

router
  .route("/noticias")
  .get(noticiaCtrl.listarNoticias)
  .post(noticiaCtrl.noticiaNueva);

router
  .route("/noticias/:_id")
  .get(noticiaCtrl.obtenerNoticia)
  .put(noticiaCtrl.editarNoticia)
  .delete(noticiaCtrl.eliminarNoticia);

export default router;
