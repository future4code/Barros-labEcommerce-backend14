import { Request, Response } from "express";
import connection from "../connection";
import { character } from "../types";

export default async function getAllCharacters(req: Request, res:Response
):Promise<void>{

try {
   const name = req.query;

   //const result: character[] = await connection.raw("SELECT * FROM character")     // Método RAW
   //res.send(result[0])

   const characters: character[] = await connection("character")                     // Método Query Builder

   res.send(characters)
   
} catch (error) {

   res.status(500).send("Unexpect server error")
   
}

}