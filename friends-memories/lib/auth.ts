
// import { redirect } from "next/navigation";
// import { createClient } from "./supabase/server";
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

export async function requireMember() {
    const user=await requireUser()
    if(!user.email){
        console.log("user.email is falsy")
        return 
    }
    const supabase=await createClient()
    const {data}=await supabase.from("members").select("email").filter("email","eq",user.email).maybeSingle()
    const email=data?.email
    
    if(!email){
        console.log(email,"is not a valid email");
        redirect("/not-invited")
    }
}