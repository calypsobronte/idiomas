import { Router } from "express";
const router = Router();

//We load the controller
import * as datosCtrl from "../controllers/datos.controllers";

//We list the GET, POST, PUT, DELET
router.post('/', datosCtrl.createDatos);
router.get('/', datosCtrl.getDatos);

export default router;