'use strict'

const express = require('express')
const memberController = require('../controllers/member_controller')
const router = new express.Router();

router.get("/getMember", memberController.index )
router.post("/add", memberController.add)
router.delete("/delete/:id", memberController.delete)
router.put("/update/:id", memberController.edit)

module.exports = router