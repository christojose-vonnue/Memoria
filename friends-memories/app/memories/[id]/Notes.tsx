import { createClient } from "@/lib/supabase/server";
import { authors } from "@/types/type";
import { connection } from "next/server";

export default async function Notes({memory_id}:{memory_id:string}) {
    await connection()
    const supabase=await createClient()
    const {data: notes,error}=await supabase.from("notes").select("*").eq("memory_id",memory_id).order("created_at",{ascending:true})
    if(error){
        throw new Error(error.message)
    }
    const authorIDs = [...new Set(notes?.map((note) => note.author_id))] 
    let authors:authors[]=[]
    if(authorIDs.length>0){
        const { data  } = await supabase.from("PROFILES").select("user_id,name").in("user_id",authorIDs)
        authors=data ?? [];
    }
    const nameById = new Map<string,string>(authors.map((a)=>[a.user_id,a.name]))
    return (notes.map((note)=>(
    <div key={note.id}>
        <p>{note.body}<small>~ {nameById.get(note.author_id)}</small></p>       
    </div>))
    )
}