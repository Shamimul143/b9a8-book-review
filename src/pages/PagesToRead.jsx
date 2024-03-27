import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { getStoredBook } from "../components/utility/localStorage";
import ChartPage from "../components/ChartPage";


const PagesToRead = () => {
    const booksItem = useLoaderData()
    const [listedBooks, setListedBooks] = useState([])
    // const [item, setItem] = useState([])
    useEffect(() => {
        const storedBookId = getStoredBook()
        if (booksItem.length > 0) {
            const listedBook = booksItem.filter(item => storedBookId.includes(item.id))
            setListedBooks(listedBook)
        }
    }, [booksItem])

    console.log(listedBooks)


    return (
        <div className="lg:flex max-w-6xl mx-auto mt-5 bg-[#1313130d] h-[300px] p-5 rounded-lg">
            {
                listedBooks.map(item => <ChartPage key={item.id} item={item} ></ChartPage>)
            }

        </div>
    );
};

export default PagesToRead;