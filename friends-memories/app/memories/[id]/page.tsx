import NotesSection from "@/components/NotesSection"
import { memories } from "@/data/memories"
import { notFound } from "next/navigation"
import { Suspense } from "react"
export default function MemoryPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <MemoryDetail params={params} />
        </Suspense>
    )
}

async function MemoryDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const memory = memories.find((memory => memory.id === id))
    if (!memory) {
        notFound()
    }
    return <>
        <h2>Memory Details</h2>
        <h3>{memory.title}</h3>
        <p>{memory.description}</p>
        <small>{memory.date}</small>
        <NotesSection />
    </>
}
