import MemoryCard from "@/components/MemoryCard"
import { requireMember } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { connection } from "next/server"
import { Suspense } from "react"
import { validate } from "uuid"
import Notes from "./Notes"
import NoteForm from "./NoteForm"
export default function MemoryPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <MemoryDetail params={params} />
        </Suspense>
    )
}

async function MemoryDetail({ params }: { params: Promise<{ id: string }> }) {
    await connection()
    await requireMember()
    const { id } = await params
    if (!validate(id)) {
        notFound()
    }
    const supabase = await createClient()
    const { data, error } = await supabase.from('memories').select("*").eq("id", id)
    if (!data || data.length == 0) {
        notFound()
    }
    if (error) {
        throw new Error(error)
    }
    return <>
        <MemoryCard title={data[0].title} description={data[0].description} date={data[0].memory_date} />
        <NoteForm memory_id={id} />
        <Suspense fallback={<p>Loading notes...</p>}>
        <hr />
            <h1>All Notes..</h1>
            <h1>-----------</h1>
            <Notes memory_id={id} />
        </Suspense>
    </>
}


// app/memories/[id]/
// ├── page.tsx
// ├── Notes.tsx       // Fetch and display notes
// ├── NoteForm.tsx    // Submit new notes
// └── actions.ts      // Server Action