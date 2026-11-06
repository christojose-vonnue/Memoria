"use server";

import { requireMember } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { FormState } from "@/types/type";
import { revalidatePath } from "next/cache";

export default async function addMemory(_prev: FormState, formData: FormData) : Promise<FormState> {
    const user = await requireMember();
    const supabase=await createClient()
    if (!user) {
        return { error: "User Not Found" };
    }
    const rawDate=String(formData.get("memory_date") ?? "")
    const memory_date= rawDate === "" ? null : rawDate;

    const title=String(formData.get("title") ?? "").trim()
    const description=String(formData.get("description") ?? "").trim()

    if(!title) return {error : "Title is required"}
    if(title.length>100) return {error : "Title is greater than 100 characters"}
    if(!description) return {error : "Description is required"}
    if(description.length>1000) return {error : "Description is greater than 100 characters"}
 
    const {error}=await supabase.from("memories").insert({title,description,memory_date})

    if(error){
        throw new Error(error.message)
    }
    revalidatePath("/memories")
    return {success:true}
}
