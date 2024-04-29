import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";
import TotalSpots from "../TotalSpots/TotalSpots";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdBrowserUpdated, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";



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
            <div>
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
            <div>
                <h2 className="text-center mt-20 text-3xl font-bold">All the spots here</h2>
                <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>
                <div className="md:grid grid-cols-2 gap-4 p-10 ">
                    {
                        spots.map(spot => <TotalSpots
                            spot={spot}
                            key={spot._id}
                        ></TotalSpots>)
                    }
                </div>
            </div>
            <div className="mb-20">
                <h2 className="text-center mt-20 text-3xl font-bold">My added spots here</h2>
                <p className="max-w-2xl text-center my-6 mx-auto">Embark on a journey to unearth hidden treasures, from serene landscapes to vibrant cultures, creating unforgettable memories awaits!</p>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Spot Name</th>
                                <th>Country</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myPlace.length > 0 ? (
                                    myPlace.map(spot => <tr key={spot._id}>
                                        <td></td>
                                        <td>{spot.touristsSpotName}</td>
                                        <td>{spot.country}</td>
                                        <td>
                                            <button><MdBrowserUpdated /></button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(spot._id)}><MdDelete /></button>
                                        </td>


                                    </tr>)
                                ) : (
                                    <p className="text-center text-xl my-6">No spots found for this user.</p>
                                )
                            }
                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    );
};

export default Home;