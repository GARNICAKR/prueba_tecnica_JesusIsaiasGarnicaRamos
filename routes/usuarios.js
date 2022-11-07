const express=require("express");
const router =express.Router();
const PracticaController=require('../controllers/usuarios');
router.get('/usuarios',PracticaController.obtener);
router.get('usuarios/:id',PracticaController.buscar)
module.exports=router;