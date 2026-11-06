"use client"

import { useActionState } from "react"
import addMemory from "./action"
import { FormState } from "@/types/type"
const initial: FormState = {}
export default function MemoryForm() {
    const [state, formAction, isPending] = useActionState(addMemory, initial)
    return (
        <form action={formAction}>
            <label>Title
                <input type="text" name="title" required maxLength={100} />
                <br />
            </label>
            <label>Description
                <textarea name="description" required maxLength={1000}></textarea>
                <br />
            </label>
            <label>
                Date
                <input type="date" name="memory_date" />
                <br />
            </label>
            <button type="submit" disabled={isPending}>
                {isPending ? "Saving.." : "Save"}
                <br />
            </button>
            {state.error && <p role="alert">{state.error}</p>}
            {state.success && <p>Inserted. </p>}
        </form>
    )
}