import MemoryCard from "@/components/MemoryCard";
import { memories } from "@/data/memories";

export default async function MemoriesPage() {
    return (<>
        <h1>Memories</h1>
        {memories.map((memory) => (
            <MemoryCard
                key={memory.id}
                title={memory.title}
                date={memory.date}
                description={memory.description}
            />
        ))}
    </>)
}