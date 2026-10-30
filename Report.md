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

# Task 4 by claude

1. Moved friends array and import is succesful

**Generate Support Material, Support Received from team member named GPT**

2. Link makes a card clickable and navigates the page without full reload
- `import Link from next/link`

3. Wrap each of the card components in that `Link`, it is analogus to wrapping a image or something in an anchor `<a>` tag. Add parameters `id` and `href`.`href` pointed to `/friends/{`friend.id`}`. Which is enclosed inside the map function

4. Created as instructed

5. `find` function is correctly implemeted, returning friend : `undefined | friend`

6. If `undefined` then we return `notfound()` imported form the next/link

# Task 5 by claude

1. Children is rendered in the function `RootLayout` of type `LayoutProps` in the file layout.tsx
2. Created nav element above children with two links
3. Created type Memory
4. Exported 3 typed memories
5. Component Memory card is made as required.
6. All memories are mapped and displayed.
7. nav behoviour is verified
8. Before commit, I would like to add a Home Link to the nav.. ?? how
Also I changed the content of Home() to simple WElcome message and added all the friend card to the friends/page.tsx so that  http://localhost:3000/friends have something to display

# Task 6 by Claude

1. Repeated the same, memories/:id rendering properly
2. Create NotesSection card, 1. It exports function , 2. displays notes 3. Add button adds Non "" trimmed text to the notes state
3. Implemented a state const [notesKey, setKey] = useState<number>(1) and inside each map,setKey(notesKey+1) is implemented for now.But This caused recursive loops of re-rendering, so i had  use index instead .. which will become unstable once if we add delete notes option
4. Successfully called NotesSection componenet
5. Implemented notes.push
But no issues or visible changes are seen or observed initially as `setText("")` created a rerender, both of setstates were commented and then on observing, the UI was not being updated

❓ Checkpoint 6

1. Why does notes.push(text) fail to update the screen, while setNotes([...notes, text]) works?
2. Why does "use client" go on NotesSection and not on the whole detail page?
3. What happens to your notes when you refresh, and which later phase fixes it?

1. Unfortunately it does not fail to update the screen, notes.push is working


2. Well we use react states in the component to we require use state in th component not in the details page

3. The phase in which we actually connect the react to a backend database will retain the memory

# Task 7 by claude

1. Added Type,updated state
2. REmoved
3. crypto.randomUUID() is used 
4. Rendered
5. Delete button is rendered and functional
6. THis is hard to judge visually, but we can logically conclude that index is not safe
7. commited


# Task 8 BY claude

1. Signed Up with github and createda n account.
2. Created Table, and entered 4 entries
3. RLS and policy is enabled
4. Found connect in dashboard and copied .env.local file
5. Verified git status does not have .env file
6. exported const supabase
7. used the supabase const for entering query and retreiving data
8. Updated all subsequent, types and all functions
9. Data will not be fetched
10. commited

# Task 9 by claude

1. Removed Array lookup
2. Handled outcomes and errors
3. Invalid input syntax for type uuid: "abc"
4. No files use @data/friends.ts, SO the file is deleted
5. The build is working
6. commited 

Ans 1. `.single()` Expects either returns the object or throws error if the row is not found, but maybe single returns `[]`
Ans 2. Because  ` invalid input syntax for type uuid:` the synatx is wrog for the type uuid
Ans 3. `Error: Module not found: Can't resolve '@/data/friends'` Build confirms if all import exists, Additionaly i changes the freinds type to string, but  the friends data still had previous no.s like (7,10,70) This issue was also reported by the build command


# Task 10 by Claude

1. Google Cloud Console: create a project and configure the OAuth consent screen. While it’s in testing mode, add yourself and your friends’ Gmail addresses as test users. Then create an OAuth client of type Web application.
2. In Supabase, open Authentication, then Providers, then Google. Enable it and copy the callback URL it shows.
3. Paste that callback URL into the Google client’s Authorized redirect URIs. Copy the Google client ID and secret into the Supabase Google provider, and save.
4. installed @supabase/ssr

- Sign-in with Google console, A project was automatically created
- Renamed the project to 'memoria'
- Went to **Google AUth Platform**
- Clicked **Get started**
- Entered the working email and details
- Under **Audience** , selected external
- Add test users
- Opened Google Auth Platform → Clients.
- Created a new client
- Went back to supabase, 
- Under Authentication, enabled Google, copied redirecturl
- Using that created CLient in google cloud console, clients's ID nad SECRET, Pasted it to supabse and saved

5. Created lib/supabase/client.ts (browser)
6. Created lib/supabase/server.ts (server)
7. replaced the old supabase
8. Deleted lib/supabase.ts once nothing imports it.`npm run dev` confirms data is loading.
`npm run build` failed.Not because of type errors or improper imports.
9. About to commit

Ans 1. The NEXT_PUBLIC_URL have been told each other
Ans 2. The server client will be later used to manage sessions while the client.ts will be used to fetch data from the table
Ans 3. Handles the case where a Server Component isn't allowed to write cookies.

# Task 11 by claude

1. Added redirect urls and site url
2. Created Sign-In button
3. Created login page
4. created route.ts
5. COmpleted AuthSRtatus (Auth status was correctly updated)
6. I can verify that
7. I can't signout
8. Not commited

Ans 1. exchangeCodeForSession as far as understand is the authorization code sent by google in the url as searchparams when you have valid credentials.the code is used to get session cookies. Our server side createClient() has the features to set cookies, so we require it to receive and save access tokens and refresht tokes received.

Ans 2.  getUser() verifies the user by sending the cookies to the supabase and supabase verifies the cookies, This avoids the problem of displaying out-sync data, we can ensure that the current authenticated user with cookies in the browser

ANs 3. I could not do anything, AuthStatus shows that i am signed in, On clicking `Sign in With Google` I am redired to my homepage displayin same AuthStatus

# Task 12 by claude

1. created signOutButton
2. Rendered signout button in AuthStatus
Tested it.. 

Signed In with invalid email

Received `error=invalid_request&error_code=bad_oauth_state&error_description=OAuth+state+has+expired` in url, 

AUTH STATUS SHOWS sign in

sign in succesfull with a valid account

Logged out again.. succsess

Logged in to the same valid account without entering password

Logged Out 

Tried to sign in with `basketball1cec@gmail.com`, previously error was shown , this time AuthStatus shows displayed

3. Created auth.ts and requireUser() helper function
4. called requireUser in all async child components
5. Test success. Redirected when not logged in, NO redirection when logged in
6. Went to supabase dashboard, Applied to	Actions, CHANGED SELECT POLICY TO AUTHENTICATED USERS ONLY

Enable read access for all users SELECT	 authenticated

On reloading friends page the data is not shown

7. No errro on build but error are shown during npm run dev
8. Not committed yet.
Issues:
- friends page data is not loaded
- Some other build issue
- Are you supposed to be logged with emails not given in the test emails in the ggogle console

Ans 1. I dont know and i did not understood wat you asked
ANs 2. use client provides functionalities required for client side like "onclick" handlers, some similar functionalities will be provided by use server
Ans 3. if return in in front of it then the redirect will be inaccessibe code

## Fixes

1. Friends data not loading

- Still issue perrsist, even closed the localhost and restarted it
- Verified config
- Server logs
- cjflp03@gmail.com 0 null


2. Pasted below
```
npm run dev

> friends-memories@0.1.0 dev
> next dev

▲ Next.js 16.4.3 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.2.178:3000
- Environments: .env.local
✓ Ready in 334ms
✓ Running next.config.ts took 36ms
- Cache Components enabled
- Partial Prefetching enabled
- Experiments (use with caution):
  ✓ agentFeedback

 GET /friends 200 in 226ms (next.js: 173ms, application-code: 54ms)
 GET / 200 in 591ms (next.js: 10ms, application-code: 581ms)
Error: Route "/": Next.js encountered the unstable value `Date.now()` while prerendering.

This value can change between renders, so it must be either prerendered or computed later.

Ways to fix this:
  - [dynamic] Render at request time by adding a dynamic data access (e.g. `await connection()`) before this call
  - [cache] Prerender and cache the value with `"use cache"`
  - [client] Render the value on the client with `"use client"`
  - [measure] If the value is for telemetry, use a timing API such as `performance.now()`

Learn more: https://nextjs.org/docs/messages/blocking-prerender-current-time
    at AuthStatusWrapper (components/AuthStatus.tsx:9:13)
    at RootLayout (app/layout.tsx:34:11)
   7 |     return (
   8 |         <Suspense fallback={<p>Loading User..</p>}>
>  9 |             <AuthStatus />
     |             ^
  10 |         </Suspense>
  11 |     )
  12 | }
 GET /login 200 in 45ms (next.js: 6ms, application-code: 38ms)
 POST / 200 in 993ms (next.js: 2ms, application-code: 990ms)
  └─ ƒ <inline action>() in 847ms components/SignOutButton.tsx
 GET /friends 200 in 60ms (next.js: 4ms, application-code: 56ms)
 GET /login 200 in 76ms (next.js: 2ms, application-code: 74ms)
 GET /login 200 in 35ms (next.js: 2ms, application-code: 32ms)
 GET /memories 200 in 69ms (next.js: 11ms, application-code: 58ms)
 GET /login 200 in 113ms (next.js: 6ms, application-code: 107ms)
 GET /login 200 in 39ms (next.js: 1.9ms, application-code: 37ms)
 GET /login 200 in 50ms (next.js: 3ms, application-code: 48ms)
 GET /auth/callback?code=6e9c22ad-ffaf-4b01-befb-2d4d750e0c3c 307 in 798ms (next.js: 77ms, application-code: 721ms)
 GET / 200 in 286ms (next.js: 3ms, application-code: 284ms)
Error: Route "/": Next.js encountered the unstable value `Date.now()` while prerendering.

This value can change between renders, so it must be either prerendered or computed later.

Ways to fix this:
  - [dynamic] Render at request time by adding a dynamic data access (e.g. `await connection()`) before this call
  - [cache] Prerender and cache the value with `"use cache"`
  - [client] Render the value on the client with `"use client"`
  - [measure] If the value is for telemetry, use a timing API such as `performance.now()`

Learn more: https://nextjs.org/docs/messages/blocking-prerender-current-time
    at AuthStatusWrapper (components/AuthStatus.tsx:9:13)
    at RootLayout (app/layout.tsx:34:11)
   7 |     return (
   8 |         <Suspense fallback={<p>Loading User..</p>}>
>  9 |             <AuthStatus />
     |             ^
  10 |         </Suspense>
  11 |     )
  12 | }
 GET /friends 200 in 499ms (next.js: 3ms, application-code: 496ms)
Error: Route "/friends": Next.js encountered the unstable value `Date.now()` while prerendering.

This value can change between renders, so it must be either prerendered or computed later.

Ways to fix this:
  - [dynamic] Render at request time by adding a dynamic data access (e.g. `await connection()`) before this call
  - [cache] Prerender and cache the value with `"use cache"`
  - [client] Render the value on the client with `"use client"`
  - [measure] If the value is for telemetry, use a timing API such as `performance.now()`

Learn more: https://nextjs.org/docs/messages/blocking-prerender-current-time
    at AuthStatusWrapper (components/AuthStatus.tsx:9:13)
    at RootLayout (app/layout.tsx:34:11)
   7 |     return (
   8 |         <Suspense fallback={<p>Loading User..</p>}>
>  9 |             <AuthStatus />
     |             ^
  10 |         </Suspense>
  11 |     )
  12 | }
```

3. basketball1cec@gmail.com is not listed and Publishing Status is testing

# Task 13 by claude

1. `members` table created
2. inserted data
3. ran policy queries
4. I think i skipped this step.. i dont recall doing step 4, I went to 5, sorry
5. Added requireMembere function
6. swapped all four places
7. created not invited page, with sign out button
8. Tested with npm run build no issues

Ans 1. The real lock is auth.ts, filter query , where we verify if the user.email is equal to any valid emails in the memeber email , the other loack is the member table.

Ans 2. Because then this invaild user goes to the requireMember again, they will not pass authorization, and be redirected to not invited only to continue this loop

Ans 3. we get that email from the user object returned by requireUser, this is safe because we are authenticating with supabase by getUser()

**A concern**

If we are authenticating via table, what is the advatage of having google sign in