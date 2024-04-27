import { useLoaderData } from "react-router-dom";
import { IoBuild } from "react-icons/io5";
import { MdBedroomChild } from "react-icons/md";
import { FaBath, FaChartArea } from "react-icons/fa6";


const SpotDetails = () => {

    const SpotDetails = useLoaderData();

    const { _id, photo, touristsSpotName, country, location, cost, description, email, name, seasonality, totaVisitorsPerYear, travelTime } = SpotDetails;


    return (
        <div>
            <div className="relative bg-cover bg-center h-[600px] lg:h-96" style={{ backgroundImage: `url({photo})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div data-aos="zoom-in-right" data-aos-duration="1500" className="text-center flex flex-col items-center justify-center border-[white] "> {/* First grid item */}
                                <h1 className="text-xl font-semibold">${cost}</h1>
                                <h1 className="text-3xl font-bold mb-4">{touristsSpotName}</h1>
                                <p className="text-lg">{location}</p>
                                <div className="flex gap-5 mx-auto w-1/2 mt-5">
                                    <button className="btn btn-secondary border-none bg-[#FF6347]">About Us</button>
                                    <button className="btn btn-secondary border-none bg-[#1f1d1c]">Contact Us</button>
                                </div>
                            </div>
                            <div data-aos="zoom-in-left" data-aos-duration="1500" className=""> {/* Second grid item, hidden on smaller devices */}
                                <div className="grid grid-cols-2 gap-5 p-5">
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <IoBuild />
                                        <p>{travelTime}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <MdBedroomChild />
                                        <p>{seasonality}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <FaBath />
                                        <p>{totaVisitorsPerYear}</p>
                                    </div>
                                    <div className="p-5 text-center flex flex-col items-center gap-5 border-[1px] border-[white] border-dashed">
                                        <FaChartArea />
                                        <p>{country}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SpotDetails;