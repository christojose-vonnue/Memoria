import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Suspense } from "react";

export default function AuthStatusWrapper() {
    return(
        <Suspense fallback={<p>Loading User..</p>}>
            <AuthStatus />
        </Suspense>
    )
}

async function AuthStatus() {
    const supabase=await createClient()
    const {data:{user}}=await supabase.auth.getUser()
    if(user){
        return <span>Signed in as {user.email}</span>;
    }
    return <Link href="/login">Sign in</Link>;
}