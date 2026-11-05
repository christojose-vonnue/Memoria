import Image from "next/image";

export default function Avatar({name,url,size}:{name:string,url:string | null,size:number}){
    if(url){
        return(
            <Image src={url} alt={`${name}'s avatar`} width={size} height={size}  loading="eager"/> 
        )
    }
    else{
        return(
            <p>
                {name.at(0)?.toUpperCase() ?? "?"}
            </p>
        )
    }
}

