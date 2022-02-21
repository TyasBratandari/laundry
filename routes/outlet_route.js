'use strict'

const express = require('express')
const memberController = require('../controllers/outlet_controller')
const router = new express.Router();

router.get("/getOutlet", memberController.index )
router.post("/add", memberController.add)
router.delete("/delete/:id", memberController.delete)
router.put("/update/:id", memberController.edit)

module.exports = router