'use strict'

const express = require('express')
const adminController = require('../controllers/admin_controller')
const router = new express.Router();

router.get("/getAdmin", adminController.index )
router.post("/add", adminController.add)
router.delete("/delete/:id", adminController.delete)
router.put("/update/:id", adminController.edit)

module.exports = router