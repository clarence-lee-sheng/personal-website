import Link from "next/link"

export default function Card({name, path, imgSrc}: {name: string, path: string, imgSrc: string}){
    return (
        <div className="rounded shadow-lg group hover:scale-110 hover:bg-teal-300 transition duration-75">
            <Link className="flex-col items-center justify-center  px-3 py-2" href={path}>
                <div className="h-48 w-64">
                    <img className="object-contain group-hover:scale-110 h-48 w-96" src={imgSrc}/>
                </div>
                <div className="w-full text-center inline-block">
                    {name}
                </div>
            </Link>
        </div>
    )
}