import Banner from "../components/Banner";
import Books from "../components/Books";


const HomePage = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default HomePage;