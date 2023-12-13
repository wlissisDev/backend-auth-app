import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { client } from "../utils/ClientPrisma";

export async function CreateUser(request: Request, response: Response) {
    const { username, password } = request.body

    try {
        const existedUser = await client.user.findFirst({ where: { username } });
        if (existedUser) {
            return response.json("User already exists");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await client.user.create({ data: { username, password: hashPassword } });
        return response.json(result)

    } catch (error) {
        console.error("Error" + error)
    }


}