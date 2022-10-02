import { useEffect, useState } from "react";
import Country from "../Country/Country";
import Search from "../Search/Search";

import './Countries.css';


export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [displayCountries, setDisplayCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setDisplayCountries(data)
            });
    }, []);


    const handleSearch = (searchValue) => {
        if (searchValue !== '') {
            let value = searchValue.toLowerCase();
            const filteredCountries = countries.filter((country) => {
                const countryName = country.name.toLowerCase();
                return countryName.startsWith(value)
            })
            setDisplayCountries(filteredCountries);
        }

    }


    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <Search onSearch={handleSearch} />
            <div className="countries">
                {displayCountries.map((country) => (
                    <Country
                        country={country}
                        key={country.alpha3Code}
                    ></Country>
                ))}
            </div>

        </div>
    );
}