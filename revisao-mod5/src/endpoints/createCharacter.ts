import { Request, Response } from "express";
import connection from "../connection";
import { characters } from "../data";

export default async function createCharacter(req:Request, res:Response
    ):Promise<void>{

        try {
            
            const {name,gender,description} = req.body 

      //  console.log(req.headers["Content-Type"])
    
        // characters.push({
        //     id:Date.now(),
        //     name,
        //     gender,
        //     description
        // })
       
       // const result = await connection("character")
       await connection("character")
            .insert({name, gender, description})

        res.status(201).send(characters)

        } catch (error:any) {
            res.status(500).send(error)
        }
    }