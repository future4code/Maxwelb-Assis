import { Request, Response} from "express"
import {createUser} from "../users"

export const createUserEndpoint = async (
    req: Request,
    res: Response): Promise<void> =>{
        try {
           createUser(
               req.body.name,
               req.body.nickmane,
               req.body.email
           )
           res.status(200)
        } catch (error) {
            res.status(400).send({
                message: error.message,
            })
        }

    }


