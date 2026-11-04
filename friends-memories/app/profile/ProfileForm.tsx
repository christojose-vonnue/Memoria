"use client"

import { useActionState } from "react";
import updateProfile from "./action";
import { FormState } from "@/types/type";

const initial : FormState={}
export default function ProfileForm({name,bio}:{name:string,bio:string}){
    const [state,formAction,isPending]=useActionState(updateProfile,initial);
    return (
        <form action={formAction}>
            <label>
                    Name --
                    <input name="name" defaultValue={name} required />
                </label><br />
                <label>
                    bio --
                    <textarea name="bio" defaultValue={bio} maxLength={300} />
                </label>
                <button type="submit" disabled={isPending}> {isPending ? "Saving..":"Save"} </button>
                {state.error && <p role="alert">{state.error}</p>}
                {state.success && <p>Saved. </p>}
        </form>
    )
}