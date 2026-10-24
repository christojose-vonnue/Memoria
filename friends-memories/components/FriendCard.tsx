export default function FriendCard({name,bio}:{name:string,bio:string}){
    return(
        <div>
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}