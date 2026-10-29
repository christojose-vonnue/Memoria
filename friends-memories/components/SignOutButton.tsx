import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default function SignOutButton(){
    async function SignOut() {
        "use server";
        const supabase=await createClient()
        await supabase.auth.signOut()
        redirect("/login")
    }
    return(
        <form action={SignOut}>
            <button type="submit">| Sign Out |</button>
        </form>
    )
}

// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";

// export default function SignOutButton(){
//     async function SignOut() {
//         "use server"
//         const supabase=await createClient()
//         await supabase.auth.signOut()
//         redirect("/login")
//     }
//     return(
//         <form action={SignOut}>
//             <button type="submit">Sign Out</button>
//         </form>
//     )
// }