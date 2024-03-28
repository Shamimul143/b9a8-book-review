
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from './utility/localStorage';
import ReadBookList from './ReadBookList';
import { IoIosArrowDown } from 'react-icons/io';

const ReadBook = () => {
    const booksItem = useLoaderData()
    const [listedBooks, setListedBooks] = useState([])
    const [displayBook, setDisplayBook] = useState([])

    const handelFilterBook = (filter) => {
        if (filter == "rating") {
            const filterBooks = listedBooks.filter(book => book.rating == 4.5)
            setDisplayBook(filterBooks)
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
        const storedBookId = getStoredBook()
        if (booksItem.length > 0) {
            const listedBook = booksItem.filter(item => storedBookId.includes(item.id))
            setListedBooks(listedBook)
            setDisplayBook(listedBook)
        }
    }, [booksItem])

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className="flex justify-end">    <details className="dropdown">
                <summary className="m-1 btn py-2 px-4 rounded-lg mr-2 bg-[#23be0a] text-white">Filter <span><IoIosArrowDown /></span></summary>
                <ul className="p-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handelFilterBook("rating")}><a>Rating</a></li>
                    <li onClick={() => handelFilterBook("numberOfPage")}><a>Number Of Page</a></li>
                    <li onClick={() => handelFilterBook("publishYear")}><a>Publisher Year</a></li>
                </ul>
            </details>
            </div>
            {
                displayBook.map(item => <ReadBookList key={item.id} item={item}></ReadBookList>)
            }
        </div>
    );
};

ReadBook.propTypes = {

};

export default ReadBook;