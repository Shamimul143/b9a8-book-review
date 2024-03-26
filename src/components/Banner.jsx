
import { Link } from "react-router-dom";
import image from "../../public/pngwing.png"
const Banner = () => {
    return (
        <div className="hero bg-[#1313130d] rounded-lg">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img src={image} className="max-w-sm " />
          <div className="lg:pr-20 ">
            <h1 className="text-5xl font-bold">Books to freshen <br/> up your bookshelf</h1>            
            <Link to="/listedBook"><button className="mt-8 py-2 px-4 rounded-md mr-2 bg-[#23be0a]">View The List</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;