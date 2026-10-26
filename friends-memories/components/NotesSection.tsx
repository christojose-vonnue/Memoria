"use client";
import { useState } from "react";

export default function NotesSection() {
    const [text, setText] = useState("")
    const [notes, setNotes] = useState<string[]>([])
    return (
        <>
            <hr />
            <h2>Notes</h2>
            {
                notes.map((note, index) => (
                    <div key={index}>
                        * {note}  <br />
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
                    setNotes([...notes, text]);
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

