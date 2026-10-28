import MemoryCard from "@/components/MemoryCard";
import { memories } from "@/data/memories";
import Link from "next/link";
import { Suspense } from "react";
export default function MemoriesPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Memories />
        </Suspense>
    )
}

async function Memories() {
    return (<>
        <h1>Memories</h1>
        {memories.map((memory) => (
            <Link href={`/memories/${memory.id}`} key={memory.id}>
                <MemoryCard
                    key={memory.id}
                    title={memory.title}
                    date={memory.date}
                    description={memory.description}
                />
            </Link>
        ))}
    </>)
}