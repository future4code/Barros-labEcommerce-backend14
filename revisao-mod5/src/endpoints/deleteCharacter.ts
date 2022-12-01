import { Request, Response } from "express";
import connection from "../connection";

export default async function deleteCharacter(req: Request, res:Response
):Promise<void>{
   const {id} = req.params

   try {
      //    const index:number = characters.findIndex(
      //     character => character.id === Number(id)
      //    )

      //    if(index > -1) characters.splice(index, 1)
      await connection("character")
         .delete()
         .where({id})

   } catch (error) {
      res.status(500).end()
   }

   
   res.status(200).send("Character deleted!")
}