import { requireMember } from "@/lib/auth";
import { connection } from "next/server";
import { Suspense } from "react";
import MemoryForm from "./MemoryForm";

export default function NewMemory(){
    return(<Suspense fallback={<p>Loading..</p>}>
        <NewMemoryPage />
    </Suspense>)
}

async function NewMemoryPage(){
    await connection()
    const user=await requireMember()
    if(!user){
        throw new Error("User is undefined")
    }
    return <main>
        <MemoryForm />
    </main>
}