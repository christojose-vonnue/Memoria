"use server"

import { requireMember } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { FormState } from "@/types/type";
import { revalidatePath } from "next/cache";

export async function addNote(_prev:FormState,formData:FormData) : Promise<FormState> {
    await requireMember()
    const memoryId= String(formData.get("memory_id") ?? "")
    const body=String(formData.get("body") ?? "").trim()

    if(!body){
        return {error : "Note cannot be empty"}
    }

    if (body.length > 500) {
        return { error: "Note must be 500 characters or fewer" };
    }

    const supabase=await createClient()

    const {error} =await supabase.from("notes").insert({memory_id:memoryId,body})
     if (error) {
        return { error: error.message };
    }

    revalidatePath(`/memories/${memoryId}`)
    return {success:true};
}