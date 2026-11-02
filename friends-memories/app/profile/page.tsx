
import { Suspense } from "react";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireMember } from "@/lib/auth";
import updateProfile from "./action";
import { redirect } from "next/navigation";

async function ProfileContent() {
    await connection();

    const user = await requireMember()!;
    const supabase = await createClient();
    if (!user) {
        redirect("/login")
    }
    const { data: profile, error } = await supabase
        .from("PROFILES")
        .select("name, bio, avatar_url")
        .eq("user_id", user.id)
        .single();

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <main>
            <h1>My Profile</h1>
            <p>Name: {profile.name}</p>
            <p>Bio: {profile.bio}</p>
            <p>Avatar URL: {profile.avatar_url}</p>
            <hr />
            <h1>Edit your Profile</h1>
            <form action={updateProfile}>
                <label>
                    Name --
                    <input name="name" defaultValue={profile.name} required />
                </label><br />
                <label>
                    bio --
                    <textarea name="bio" defaultValue={profile.bio} maxLength={300} />
                </label>
                <button type="submit">Save</button>
            </form>
        </main>
    );
}

export default function ProfilePage() {
    return (
        <Suspense fallback={<p>Loading profile...</p>}>
            <ProfileContent />
        </Suspense>
    );
}
