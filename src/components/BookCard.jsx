
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";

const BookCard = ({ book }) => {

    const { id, image, tags, bookName, author, category, rating } = book

    return (
        <Link to={`/book/${id}`}>
            <div className="card bg-base-100 shadow-xl p-5 h-[450px] border-2 border-[#f3f3f3]">
                <div className='bg-[#f3f3f3] rounded-md'><figure ><img className='py-5' src={image} alt="Book" /></figure></div>
                <div className="card-body">
                    <div className='space-x-5 text-[#23be0a] mb-3'>
                        <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{tags[0]}</span>
                        <span className='bg-[#f3f3f3] py-1 px-4 rounded-2xl text-sm font-semibold'>{tags[1]}</span>
                    </div>
                    <h2 className="card-title font-bold">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-around">
                        <p>{category}</p>
                        <div className='flex items-center gap-2'>
                            <p>{rating}</p>
                            <p><AiOutlineStar /></p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: PropTypes.array
};

export default BookCard;