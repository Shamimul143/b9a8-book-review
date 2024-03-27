
import {  useState } from "react";
import { Link, Outlet} from "react-router-dom";
const ListedBooks = () => {    
    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div >
            <h1 className=" max-w-6xl mx-auto my-10 bg-[#f3f3f3] text-center py-5 rounded-md text-3xl font-bold">Books</h1>          

            <div role="tablist" className="tabs tabs-lifted w-20 ml-52">
                <Link onClick={() => setTabIndex(0)} to="" role="tab" className={` ${tabIndex === 0 ? "tab tab-active" : "tab"}`}>Read</Link>
                <Link onClick={() => setTabIndex(1)} to={`wishlist`} role="tab" className={` ${tabIndex === 1 ? "tab tab-active" : "tab"}`}>Wishlist</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;