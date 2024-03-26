import { useLoaderData, useParams } from "react-router-dom";
import { saveStoredBook } from "./utility/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const BookDetails = () => {
    const [items, setItems] = useState([])
    const [items2, setItems2] = useState([])
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book

    const handleBookRead = (books) => {
        const isExist = items.find(item => item.id == books.id)
        if (!isExist) {
            const newItem = [...items, books]
            setItems(newItem)
            toast.success("Book Added Successfully");
        } else {
            toast.warning("Already Eexist");
        }
        saveStoredBook(idInt)
    }

    const handleBookWishlist = (books) => {
        const isExist = items2.find(item => item.id == books.id)
        if (!isExist) {
            const newItem = [...items2, books]
            setItems2(newItem)
            toast.success("Book Added Successfully");
        } else {
            toast.warning("Already Eexist");
        }
        saveStoredBook(idInt)
    }

    return (
        <div className=" max-w-6xl mx-auto my-10">
            <div className=" lg:flex justify-around gap-5">
                <div className="rounded-lg  bg-[#f3f3f3] p-10  lg:w-[500px]  ">
                    <img className="lg:w-[400px]" src={image} />
                </div>
                <div className="max-w-2xl p-4">
                    <h1 className="text-5xl font-bold mb-5">{bookName}</h1>
                    <p>By: {author}</p>
                    <hr className="my-3" />
                    <p>{category}</p>
                    <hr className="my-3" />
                    <p className="py-3"><span className="font-bold">Review:</span> {review}</p>
                    <div className='space-x-5 text-[#23be0a] mb-3'>
                        <span className="text-black"><span className="font-bold">Tag: </span></span>
                        <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{tags[0]}</span>
                        <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{tags[1]}</span>
                    </div>
                    <hr className="my-3" />
                    <div className="space-y-3">
                        <p>Number of Pages:<span className="ml-10 font-bold">{totalPages}</span></p>
                        <p>Publisher:<span className="ml-24 font-bold">{publisher}</span></p>
                        <p>Year of Publishing:<span className="ml-10 font-bold">{yearOfPublishing}</span></p>
                        <p>Rating:<span className="ml-28 font-bold">{rating}</span></p>
                    </div>
                    <button onClick={() => handleBookRead(books)} className="rounded-md border-2 py-1 px-4 mr-5 mt-3 font-bold">Read</button>
                    <button onClick={() => handleBookWishlist(books)} className="py-1 px-4 rounded-md bg-[#59c6d2] text-white">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;