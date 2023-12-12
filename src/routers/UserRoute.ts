import { Router } from "express";
import { CreateUser } from "../controllers/UserController";

export const routes = Router();

routes.post("/register",CreateUser);