"use client"

import { createClient } from "@/lib/supabase/client"

export default function GoogleSignInButton(){
    async function signIn() {
        const supabase=await createClient()
        await supabase.auth.signInWithOAuth({
            provider:"google",
            options:{
                redirectTo:`${location.origin}/auth/callback`
            }
        })
    }
    return <button onClick={signIn}>Sign In With Google</button>
}

// "use client"
// import { createClient } from "@/lib/supabase/client"
// export default function GoogleSignInButton(){
//     async function signIn() {
//         const supabase=await createClient()
//         await supabase.auth.signInWithOAuth({
//             provider:"google",
//             options:{
//                 redirectTo:`${location.origin}/auth/callback`
//             }
//         })
//     }
//     return (<button onClick={signIn}>Sign In With Google</button>)
// }