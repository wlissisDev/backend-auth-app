import { Router } from "express";
import { CreateUser, LoginUser } from "../controllers/UserController";
import { Auth } from "../middleware/auth";

export const routes = Router();

routes.post("/register",CreateUser);
routes.post("/login", LoginUser);
routes.get("/products",Auth, (req, res)=>{

    return res.send("produtos")
})