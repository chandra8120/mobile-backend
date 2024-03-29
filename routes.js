import express from 'express'
import Form from './Form.js'
import ChandraController from './Chandra.js'

const router=express.Router()

router.post("/postformdata",Form.createForm)
router.get("/get",Form.getAllForms)
//
router.post("/postchandra",ChandraController.createChandra)
router.post("/getchandra",ChandraController.getAllChandra)

export default router