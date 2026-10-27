import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"
export default async function FriendPage({ params }: { params: Promise<{ id: string }> }) {
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