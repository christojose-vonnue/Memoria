import { sample } from "@/data/friends"
import { notFound } from "next/navigation"
export default async function FriendPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const friend = sample.find((friend => friend.id === Number(id)))
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