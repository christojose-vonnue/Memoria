import MemoryCard from "@/components/MemoryCard";
import { memories } from "@/data/memories";
import Link from "next/link";

export default async function MemoriesPage() {
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