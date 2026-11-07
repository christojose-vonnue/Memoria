import { UUID } from "crypto"

export interface Friend{
    id:string,
    name:string,
    bio:string,
    avatar_url:string | null
}

export interface Memory{
    id:string,
    title:string,
    memory_date:string | null,
    description:string,
    status: "pending" | "approved"
}

export interface Note{
    id:UUID,
    memory_id:UUID,
    author_id:UUID,
    body : string,
    created_at:string,
    text:string
}

export type FormState = {error ?: string; success?:boolean}

export type authors ={
    user_id:UUID,
    name:string
}