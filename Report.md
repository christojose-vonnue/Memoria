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