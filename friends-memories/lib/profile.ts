import { SupabaseClient, User } from "@supabase/supabase-js";

export async function ensureProfile(supabase:SupabaseClient,user:User) {
    const {data:profile,error}=await supabase.from("PROFILES").select("*").eq("user_id",user.id).maybeSingle()
    if(error) throw error
    if(!profile){
        const name=user.user_metadata.full_name || user.email;
        const avatar_url=user.user_metadata.avatar_url;

        const {data,error}=await supabase.from("PROFILES").insert({user_id:user.id,name,avatar_url,bio:''}).select().single()

        if(error) throw error

        return data
    }
}