import {Router} from "express" ;
const router = Router();

import { registerUser } from "../controllers/auth.controller.js";

router.route('/register').post(registerUser);

export default router