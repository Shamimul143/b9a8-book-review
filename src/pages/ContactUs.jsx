
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="h-[200px] flex flex-col justify-center items-center">
            <h1 className='font-bold'>Md Shamimul Islam</h1>
            <h3>Mobile: 01854400000</h3>
            <h3>Email: shamimul143@gmail.com</h3>
            <Link to="/" className="bg-[#23be0a] px-5 py-1 rounded-md my-3 text-white">Back to Home</Link>
        </div>
    );
};

export default ContactUs;