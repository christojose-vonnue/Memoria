"use server";

import { requireMember } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { FormState } from "@/types/type";
import { revalidatePath } from "next/cache";

export default async function updateProfile(prev:FormState,formData: FormData) : Promise<FormState> {
    const user = await requireMember();
    if (!user) {
        return {error:"User Not Found"};
    }
    const name = String(formData.get("name") ?? "").trim();
    const bio = String(formData.get("bio") ?? "").trim();

    if (!name) return {error:"Name is required!! "};
    if (bio.length>300) return {error : "Bio must be 300 characters or fewer."  }
    const supabase = await createClient();
    const { error } = await supabase.from("PROFILES").update({name,bio}).eq("user_id",user.id);
    
    if(error) throw error
    revalidatePath("/profile")
    return {success:true}
}
