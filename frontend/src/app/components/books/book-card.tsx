export default function BookCard({title, author, imgSrc}: {title: string, author: string, imgSrc: string}){
    return(
        <div className="rounded shadow-xl bg-indigo-50 hover:bg-indigo-200 inline-block min-w-48 w-2/12 px-2 py-3"> 
            <div className="text-lg font-bold text-center">{title}</div>
            <div className="h-12 align-middle text-center">{author}</div>
            <div>
                <img className="object-contain w-96 h-48" src={imgSrc}/> 
            </div>
        </div>
    )
}