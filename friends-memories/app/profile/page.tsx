
import { Suspense } from "react";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {  requireUser } from "@/lib/auth";

async function ProfileContent() {
  await connection();

  const user = await requireUser();
  const supabase = await createClient();

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
