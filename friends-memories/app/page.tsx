import FriendCard from "@/components/FriendCard";
import { sample } from "@/data/friends";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Memoria</h1>
      {sample.map(
        friend => <Link key={friend.id} href={`friends/${friend.id}`}>
          <FriendCard key={friend.id} name={friend.name} bio={friend.bio} />
        </Link>

      )}
    </main>
  );
}
