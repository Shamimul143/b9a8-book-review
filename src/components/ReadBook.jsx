
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from './utility/localStorage';
import ReadBookList from './ReadBookList';

const ReadBook = () => {   
    const booksItem = useLoaderData()
    const [listedBooks, setListedBooks] = useState([]) 
    useEffect(() => {
        const storedBookId = getStoredBook()
        if (booksItem.length > 0) {
            const listedBook = booksItem.filter(item => storedBookId.includes(item.id))
            setListedBooks(listedBook)
        }
    }, [booksItem])

    return (
        <div className='max-w-6xl mx-auto my-10'>
            {
                listedBooks.map(item=> <ReadBookList key={item.id} item={item}></ReadBookList>)
            }
        </div>
    );
};

ReadBook.propTypes = {

};

export default ReadBook;