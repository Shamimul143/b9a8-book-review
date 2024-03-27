import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[200px] flex flex-col justify-center items-center">
            <h1>Oops!!............</h1>
            <Link to="/" className="bg-[#23be0a] px-5 py-1 rounded-md my-3 text-white">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;