# Task 1 by claude

- Initialize a Next.js File

`npx create-next-app@latest`

```
▲ Next.js 16.4.3 (Turbopack)
- Local:         http://localhost:3000
```

Automatically installed following packages
```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.4.3",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
```

I can confirm that the local host is showing the default setup, with Next.js 

# Task 2 by claude

1. Switched to a new branch 'phase2-react-basics',Successfully Re-rendered the h1 tag, Memoria, without manual referesh
2. Created Components Folder
3. Steps 3-5 Done
6. import FriendCard from "@/components/FriendCard";
7. Property 'bio' is missing in type '{ name: string; }' but required in type '{ name: string; bio: string; }'
8. commited -m "feat: add FriendCard component with props"

# Task 3 by claude

1. Created a Friend type with id, name and bio in a types folder, inside types.ts REASON: Modularity and Scalability. Any types defined can be looked up here
2. Done
3. Deleted the data
4. Sample holds the data : {sample.map(friend => <FriendCard key={friend.id} name={friend.name} bio={friend.bio} />)}
5. Each child in a list should have a unique "key" prop. See https://react.dev/link/warning-keys for more information.
6. Commited on branch phase3-lists

Qn.1

What does map return, and why does React need that shape? 

Because funtions like for, foreach returns void element which cant be assigned to Node element
But we can assign

Qn.2

Why is the array index a poor key when the list can be reordered or deleted from?

Hardcoded stable ids are more suitable. Suppose we assign an object to as key 3, as the list changes that id also changes 

Qn .3 

What did the console warning in step 5 say, in your own words?

Just remeber, for a list mapped it via a stable key