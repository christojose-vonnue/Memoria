
import { Suspense } from "react";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { requireMember } from "@/lib/auth";
import { redirect } from "next/navigation";
import ProfileForm from "./ProfileForm";
import Avatar from "@/components/Avatar";

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
            <Avatar name={profile.name} size={150} url={profile.avatar_url} />
            <hr />
            <h1>Edit your Profile</h1>
            <ProfileForm name={profile.name} bio={profile.bio}/>
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
