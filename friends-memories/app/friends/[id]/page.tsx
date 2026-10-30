import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { requireMember } from "@/lib/auth";
import { connection } from "next/server";
export default function FriendPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<p>Loading... </p>}>
            <FriendDetail params={params} />
        </Suspense>
    )
}

async function FriendDetail({params}:{params:Promise<{id:string}>}) {
    await connection()
    await requireMember()
    const supabase=await createClient()
    const { id } = await params
    const {data,error}=await supabase.from("PROFILES").select("*").eq("id",id).maybeSingle()
    if(error) return (<p>Error Message : {error.message}</p>)
    if(!data) return (<p>You have no friends</p>)
    if (!data) {
        notFound()
    }
    return <>
        <h2>Profile</h2>
        <h3>Name</h3>
        <p>{data.name} </p>
        <h3>Bio</h3>
        <p>{data.bio}</p>

    </>
}
