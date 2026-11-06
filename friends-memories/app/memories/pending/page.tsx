import { requireMember } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
export default function MemoriesPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Memories />
        </Suspense>
    )
}

async function Memories() {
    await connection()
    await requireMember() 
    const supabase=await createClient()
    const {data , error}=await supabase.from("memories").select("title,id").filter("status","eq","pending")
    if(!data || error) throw new Error("Memories fetch failed")
    return (<>
        <h1>Memories - Pending</h1>
        {data.map((memory) => (
            <Link href={`/memories/${memory.id}`} key={memory.id}>
                <h1>{memory.title}</h1>
                <hr/>
            </Link>
        ))}
        <br/><br/>
        <Link href={`/memories/new`} title="New Memory">Add a MEMORY</Link>
    </>)
}