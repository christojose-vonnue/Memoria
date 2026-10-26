"use client";
import { Note } from "@/types/type";
import { useState } from "react";

export default function NotesSection() {
    const [text, setText] = useState("")
    const [notes, setNotes] = useState<Note[]>([])
    return (
        <>
            <hr />
            <h2>Notes</h2>
            {
                notes.map((note) => (
                    <div key={note.id}>
                        * {note.text}  <button onClick={()=> setNotes(notes.filter(n => n.id!==note.id))}>🗑️</button><br />
                    </div>
                )
                )
            }
            <hr />
            <label>
                Add New Notes..
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button onClick={() => {
                if (text.trim() != "") {
                    setNotes([...notes, {id:crypto.randomUUID(),text}]);
                    // notes.push(text)
                    setText("")
                }
                else {
                    alert("Add Memory")
                }
            }}>Add</button>
        </>
    )
}

