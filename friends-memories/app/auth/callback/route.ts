// import { createClient } from "@/lib/supabase/server";
// import { NextResponse } from "next/server";

import { ensureProfile } from "@/lib/profile";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                try {
                    await ensureProfile(supabase, user);
                } catch (error) {
                    console.error("Profile creation failed:", error);
                }
            }

            return NextResponse.redirect(`${origin}/`);
        }
        if (!error) return NextResponse.redirect(`${origin}/`);
    }
    return NextResponse.redirect(`${origin}/login`);
}

// export async function GET(request:Request){
//     const {searchParams,origin}=new URL(request.url)
//     const code=searchParams.get("code")
//     if(code){
//         const supabase=await createClient()
//         const {error}=await supabase.auth.exchangeCodeForSession(code)
//         if(!error) return NextResponse.redirect(`${origin}`)
//     }
//     return NextResponse.redirect(`${origin}/login`)
// }
