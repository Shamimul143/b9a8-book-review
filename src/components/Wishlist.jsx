import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook2 } from "./utility/localStorage";
import ReadWishlist from "./ReadWishlist";


const Wishlist = () => {
    const booksItem = useLoaderData()
    const [listedBooks, setListedBooks] = useState([])
    const [displayBook, setDisplayBook] = useState([])

    const handelFilterBook = (filter) => {
        if (filter == "all") {
            setDisplayBook(listedBooks)
        }
        else if (filter == "numberOfPage") {
            const filterBooks = listedBooks.filter(book => book.totalPages == 336)
            setDisplayBook(filterBooks)
        }
        else if (filter == "publishYear") {
            const filterBooks = listedBooks.filter(book => book.yearOfPublishing == 1951)
            setDisplayBook(filterBooks)
            
        }
    }

    useEffect(() => {
        const storedBookId = getStoredBook2()
        if (booksItem.length > 0) {
            const listedBook = booksItem.filter(item => storedBookId.includes(item.id))
            setListedBooks(listedBook)
            setDisplayBook(listedBooks)
        }
    }, [booksItem])

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex justify-center">    <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handelFilterBook("all")}><a>All</a></li>
                    <li onClick={() => handelFilterBook("numberOfPage")}><a>Number Of Page</a></li>
                    <li onClick={() => handelFilterBook("publishYear")}><a>Publisher Year</a></li>
                </ul>
            </details></div>
            {
                listedBooks.map(item => <ReadWishlist key={item.id} item={item} ></ReadWishlist>)
            }
        </div>
    );
};

export default Wishlist;