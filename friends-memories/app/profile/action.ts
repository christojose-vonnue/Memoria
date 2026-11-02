"use server";

import { requireMember } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function updateProfile(formData: FormData) {
    const user = await requireMember();
    if (!user) {
        return;
    }
    const name = String(formData.get("name") ?? "").trim();
    const bio = String(formData.get("bio") ?? "").trim();

    if (!name || bio.length > 300) return;

    const supabase = await createClient();
    const { error } = await supabase.from("PROFILES").update({name,bio}).eq("user_id",user.id);
    
    if(error) throw error
    redirect("/profile")
}
