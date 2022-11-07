const express=require("express");
const router =express.Router();
const PracticaController=require('../controllers/roles');
router.get('/roles',PracticaController.obtener);
router.get('roles/:id',PracticaController.buscar)
module.exports=router;