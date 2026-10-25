export default function MemoryCard({title,description,date}:{title:string,description:string,date:string}){
    return (
        <>
            <h2>{title}</h2>
            <p className="description"> {description}</p>
            <small>{date}</small>
        </>
    )
}