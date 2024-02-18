import BookCard from "./book-card"

export default function BooksCatalogue(){
    const books = [
        {"id":0, "title": "Designing Your Life", "author": "Bill Burnett & Dave Evans", "imgSrc": "/books/book-covers/designing_your_life.jpg"}, 
        {"id":1, "title": "Successful Aging", "author": "Daniel J. Levitin", "imgSrc": "/books/book-covers/successful_aging.jpg"}, 
        {"id":2, "title": "Play", "author": "Stuart Brown with Christopher Vaughan", "imgSrc": "/books/book-covers/play.jpg"}
    ]
    return(
        <div className="flex flex-row items-start justify-center space-x-10"> 
        {books.map((item) => {
            return <BookCard key={item.id} title={item.title} author={item.author} imgSrc={item.imgSrc}/>
        })}
      </div>
    )
}