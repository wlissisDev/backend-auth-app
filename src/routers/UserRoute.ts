import { Router } from "express";
import { CreateUser, LoginUser } from "../controllers/UserController";

export const routes = Router();

routes.post("/register",CreateUser);
routes.post("/login", LoginUser);