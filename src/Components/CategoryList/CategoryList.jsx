import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const CategoryList = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <h2>{countries.length}</h2>
            <div className="grid grid-cols-2 gap-5">
            {
                countries.map(country => <Country key={country._id} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default CategoryList;