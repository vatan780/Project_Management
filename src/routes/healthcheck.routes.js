import express from 'express'
const router = express.Router() 
import { healthCheck } from '../controllers/healthcheck.controller.js'

router.route('/').get(healthCheck)

export default router