import { Router } from "express";
import categoriasCtrl from "../controllers/categorias.controllers";

const router = Router();

//rutas de las categorias
router
  .route("/categorias")
  .get(categoriasCtrl.getPrueba)
  .post(categoriasCtrl.categoriaNueva);

router
  .route("/categorias/:_id")
  .delete(categoriasCtrl.eliminarCategoria)
  .put(categoriasCtrl.editarCategoria)
  .get(categoriasCtrl.obtenerCategoria);

export default router;
