
// import { redirect } from "next/navigation";
// import { createClient } from "./supabase/server";

import { use } from "react";
import { createClient } from "./supabase/server";
import { redirect } from "next/navigation";

// export async function requireUser(){
//     const supabase=await createClient();
//     const {data:{user}}=await supabase.auth.getUser()
//     if(!user){
//         redirect("/login")
//     }
//     return user
// }

export async function requireUser() {
    const supabase=await createClient()
    const {data:{user}}=await supabase.auth.getUser()
    if(!user){
        redirect("/login")
    }
    return user
}