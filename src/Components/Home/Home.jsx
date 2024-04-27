import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";


const Home = () => {

    const spots = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center mt-20 text-3xl font-bold">Explore Exotic Tourist Havens</h2>
            <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>
            <div className="md:grid grid-cols-2 gap-4 p-10 ">
            {
                spots.map(spot => <AllTouristSpot 
                    spot={spot}
                    key={spot._id}></AllTouristSpot>)
            }
            </div>
        </div>
    );
};

export default Home;