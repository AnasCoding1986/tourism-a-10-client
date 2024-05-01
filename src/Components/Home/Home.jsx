import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";
import TotalSpots from "../TotalSpots/TotalSpots";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdBrowserUpdated, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";



const Home = () => {

    // const [myPlace, setMyplace] = useState([])
    // useEffect(() => {

    //     if (spots && users) {
    //         const mySports = spots.filter(spot => spot.email == user?.email)
    //         setMyPlace(mySpots)
    //     }

    // }, [])


    const spots = useLoaderData();

    const { user } = useContext(AuthContext);

    const mySpots = spots.filter(spot => spot.email === user?.email);

    const [myPlace, setMyPlace] = useState(mySpots);

    const handleDelete = id => {
        fetch(`http://localhost:5000/spot/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
                    console.log("daleted successfully");
                    const remainingSpot = mySpots.filter(spot => spot._id !== id);
                    setMyPlace(remainingSpot);
                }
            })
    }

    if (mySpots) {
        console.log(mySpots);
    } else {
        console.log("no spots for this user");
    }


    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div>
                <h2 className="text-center mt-20 text-3xl font-bold font-luckiestGuy">Explore Exotic Tourist Havens</h2>
                <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>
                <div className="md:grid grid-cols-2 gap-4 p-10 ">
                    {
                        spots.slice(1,7).map(spot => <AllTouristSpot
                            spot={spot}
                            key={spot._id}></AllTouristSpot>)
                    }
                </div>
            </div>



            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;