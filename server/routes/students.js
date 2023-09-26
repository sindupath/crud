const express = require("express");
const router = express.Router();
const studentController =require("../controlers/studentsControler")

//view record
router.get('/',studentController.view);

router.get('/adduser',studentController.adduser);
//add new record
router.post('/adduser',studentController.save);


router.get("/edituser/:id",studentController.edituser);
router.post("/edituser/:id",studentController.edit);
router.get("/deleteuser/:id",studentController.delete);

module.exports=router; 