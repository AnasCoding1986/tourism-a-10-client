

const Spot = ({spot}) => {

    const {tourist_spot_name,country_Name,location,short_description,seasonality,average_cost} = spot;

    return (
        <div>
                        <div className="hero bg-base-200">
                <div className="hero-content flex-col gap-5 rounded-xl p-7 lg:flex-row">
                    <div className="flex-1">
                        <h2>{tourist_spot_name}</h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg font-semibold">Spot name : <span className="text-sm font-light">{country_Name}</span></p>
                        <p className="text-lg font-semibold">Approximate costing : <span className="text-sm font-light">{location}</span></p>
                        <p className="text-lg font-semibold">yearly visitors : <span className="text-sm font-light">{short_description}</span></p>
                        <p className="text-lg font-semibold">Trovel time : <span className="text-sm font-light">{average_cost}</span></p>
                        <p className="text-lg font-semibold">Preferred season : <span className="text-sm font-light">{seasonality}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;