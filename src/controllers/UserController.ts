import { Request, Response } from "express";
import {hash} from 'bcryptjs';
import { client } from "../utils/ClientPrisma";

export async function CreateUser(request:Request, response:Response) {
    const {username, password} = request.body

    const existedUser = await client.user.findFirst({where:{username}});
    if(!existedUser){
        response.send("user not found")
    }

    return response.json(existedUser);

}