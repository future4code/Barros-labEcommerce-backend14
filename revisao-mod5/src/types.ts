export type movie ={
    id:number,
    title:string,
    year:number
}

export enum GENDER{    // enum limita as opções
    MALE="MALE",
    FEMALE="FEMALE",
    OTHER="OTHER"
}

export type character={
    id:number,
    name:string,
    gender:GENDER,
    description?:string            //a ? torna o preenchimento opcional
}