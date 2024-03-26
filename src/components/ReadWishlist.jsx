import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { FcBusinessman } from 'react-icons/fc';
import { MdOutlineFindInPage } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ReadWishlist = ({ item }) => {
    const { id, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = item
    return (
        <div>
            <div className="hero my-5 rounded-md">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <img  src={image} className="max-w-sm rounded-lg lg:w-[200px] bg-[#f3f3f3] p-10 " />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">{author}</p>
                        <div className=' flex space-x-5  mb-3 items-center'>
                            <span className="text-black"><span className="font-bold">Tag: </span></span>
                            <span className='bg-[#f3f3f3] text-[#23be0a] py-1 px-4 rounded-2xl text-sm font-semibold'>#{tags[0]}</span>
                            <span className='bg-[#f3f3f3] text-[#23be0a] py-1 px-4 rounded-2xl text-sm font-semibold'>#{tags[1]}</span>
                            <span><CiLocationOn /></span>
                            <p> Year of Publishing:<span className="ml-5 ">{yearOfPublishing}</span></p>
                        </div>
                        <div className=" flex gap-3 items-center my-4">
                        <span><FcBusinessman /></span>
                        <p>Publisher:<span className="ml-4 ">{publisher}</span></p>
                        <span><MdOutlineFindInPage /></span>
                        <p>Page:<span className=" ml-4 ">{totalPages}</span></p>
                        </div>
                        <div className='flex gap-3 my-5'>
                        <p className=" text-[#328eff] bg-[#328eff26] rounded-lg px-4 py-1">Category: <span >{category}</span></p>
                        <p className=" text-[#ffac33] bg-[#ffac3326] rounded-lg px-4 py-1">Rating: <span >{rating}</span></p>
                        <Link to={`/book/${id}`}><button  className=" py-1 px-4 rounded-md mr-2 bg-[#23be0a]">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ReadWishlist.propTypes = {
    item: PropTypes.object
};
export default ReadWishlist;