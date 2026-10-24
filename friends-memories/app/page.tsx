import FriendCard from "@/components/FriendCard";
import { Friend } from "@/types/type";

const sample : Friend[]=[
  {
    id:70,
    name:"Christo",
    bio:"Achayan adaa uvvee.. chakara ummaaa"
  },
  {
    id:15,
    name:"Anjal",
    bio:"Enteee kalll poyee ... ayooo" 
  },
  {
    id:10,
    name:"Kuttussann",
    bio:"Padakooooooo" 
  },
  {
    id:7,
    name:"Abin Raj",
    bio:"Njan kuzhal uuthum...." 
  }
]
export default function Home() {
  return (
   <main>
        <h1>Memoria</h1>
        {sample.map(friend => <FriendCard key={friend.id} name={friend.name} bio={friend.bio} />)}
  </main>
  );
}
