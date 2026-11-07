"use client"

import { useActionState, useOptimistic } from "react"
import { addNote } from "./action"
import { FormState } from "@/types/type";

const initialState: FormState = {};


export default function NoteForm({ memory_id }: { memory_id: string }) {
    const [optimisticBody, addOptimisticBody] = useOptimistic("", (_current, newBody: string) => newBody)
    // const [state, FormAction, isPending] = useActionState(addNote, initialState)

    const [state, FormAction, isPending] = useActionState(async (prev: FormState, formData: FormData) => {
        const body = String(formData.get("body") ?? "").trim();

        if (body) addOptimisticBody(body)
        return addNote(prev, formData)
    }, initialState)


    return (
        <>
            <hr />
            <h2>Notes</h2>

            <form action={FormAction}>
                <input
                    type="hidden"
                    name="memory_id"
                    value={memory_id}
                />
                <label>
                    Add a note
                    <textarea
                        name="body"
                        required
                        maxLength={500}
                    />
                </label>
                <button type="submit" disabled={isPending}>
                    {isPending ? "Saving..." : "Add Note"}
                </button>
                {isPending && optimisticBody && (
                    <p>Sending: {optimisticBody}</p>
                )}
                {state.error && (
                    <p role="alert">{state.error}</p>
                )}

                {state.success && (
                    <p>Note added successfully!</p>
                )}
            </form>
        </>
    )
}