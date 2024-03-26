import { NavLink } from "react-router-dom";



const NavBar = () => {

    const link = <>
        <li><NavLink to="/" className={({isActive})=>isActive? "text-[#23be0a] border-2 border-[#23be0a] rounded-md py-1 px-4" :""}>Home</NavLink></li>
        <li><NavLink to="/listedBook" className={({isActive})=>isActive?"text-[#23be0a] border-2 border-[#23be0a] rounded-md py-1 px-4" :""}>Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead" className={({isActive})=>isActive?"text-[#23be0a] border-2 border-[#23be0a] rounded-md py-1 px-4" :""}>Pages to Read</NavLink></li>
        <li><NavLink to="/blogs" className={({isActive})=>isActive?"text-[#23be0a] border-2 border-[#23be0a] rounded-md py-1 px-4" :""}>Blogs</NavLink></li>
        <li><NavLink to="/contactUs" className={({isActive})=>isActive? "text-[#23be0a] border-2 border-[#23be0a] rounded-md py-1 px-4" :""}>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar  max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {
                            link
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="py-1 px-4 rounded-md mr-2 bg-[#23be0a] text-white">Sign In</a>
                <a className="py-1 px-4 rounded-md bg-[#59c6d2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;