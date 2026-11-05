import Avatar from "./Avatar"

export default function FriendCard({name,bio,url}:{name:string,bio:string,url : string | null}){
    return(
        <div>
            <Avatar name={name} url={url} size={100} />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}