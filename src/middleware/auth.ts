import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export async function Auth(request:Request, response:Response, next:NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message: "Token is missing"
        })
    }

    const token = authToken.split(" ")[1];
    jwt.verify(token,`${process.env.SECRET_KEY}`,(err, decode)=>{
        if(err){
            return response.status(401).json(err);
        }
        return next();
    })
}