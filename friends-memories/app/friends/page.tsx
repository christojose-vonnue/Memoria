import FriendCard from "@/components/FriendCard";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
export default async function FriendsPage() {
  const supabase= await createClient()
  const {data,error}=await supabase.from("PROFILES").select("*")
  if(error) return (<p> Failed to load friends {error.message} </p>)
  if(!data) return (<p>You have no friends</p>)
    return (<>
        <h1>Friends</h1>
        {data.map(
        friend => <Link key={friend.id} href={`friends/${friend.id}`}>
          <FriendCard key={friend.id} name={friend.name} bio={friend.bio} />
        </Link>

      )}
    </>)
}