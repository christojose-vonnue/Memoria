import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Suspense } from "react";
import SignOutButton from "./SignOutButton";
import { connection } from "next/server";

export default function AuthStatusWrapper() {
    return (
        <Suspense fallback={<p>Loading User..</p>}>
            <AuthStatus />
        </Suspense>
    )
}

async function AuthStatus() {
    await connection()
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
        return(
        <>
            <span> Signed in as {user.email}</span>
            <SignOutButton />
        </>
        )

    }
    return <Link href="/login">Sign in</Link>;
}