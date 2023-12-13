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

export async function LoginUser(request: Request, response: Response) {
    const { username, password } = request.body

    try {
        const existedUser = await client.user.findFirst({ where: { username } });
        if (!existedUser) {
            return response.json("User not found");
        }
        const passwordIsCorrect = await bcrypt.compare(password, existedUser.password);
        if(!passwordIsCorrect){
            return response.json("password is incorrect");
        }
        return response.json(existedUser);

    } catch (error) {
        console.error("Error" + error)
    }
}