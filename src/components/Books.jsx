import { useEffect, useState } from "react";
import BookCard from "./BookCard";


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("book.json")
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])


    return (

        < div >
            <h1 className="text-center text-2xl font-bold my-5 ">Books</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div >
    );
};

export default Books;