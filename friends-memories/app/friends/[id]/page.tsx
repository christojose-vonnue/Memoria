import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"
export default async function FriendPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const {data,error}=await supabase.from("PROFILES").select("*")
    if(error) return (<p>Error Message : {error.message}</p>)
    if(!data) return (<p>YOu have no friends</p>)
    const friend = data.find((friend => friend.id === id))
    if (!friend) {
        notFound()
    }
    return <>
        <h2>Profile</h2>
        <h3>Name</h3>
        <p>{friend.name} </p>
        <h3>Bio</h3>
        <p>{friend.bio}</p>

    </>
}