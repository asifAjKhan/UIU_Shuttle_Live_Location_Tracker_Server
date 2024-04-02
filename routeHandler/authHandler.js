import  express from "express";

import { register, login } from "../controllers/auth.js";

const authRouther = express.Router();


authRouther.post("/register", register)

authRouther.post("/login", login)


export default authRouther;