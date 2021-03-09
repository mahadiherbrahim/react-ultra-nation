import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
    const {name} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])

    const countryInfo ={
        border: '1px solid cyan',
        width: '600px',
        margin : 'auto',
        padding: '10px',
        textAlign: 'center',
        borderRadius : '10px',
        boxShadow: '5px 5px 10px solid gray',
    }

    return (
        <div style={countryInfo}>
            <h1>{name} Country Details Page</h1>
            <img src={country.flag} alt="" style={{width:'250px',height:'250px'}}/>
            <h2>Name : {country.name}</h2>
            <p>Capital : {country.capital}</p>
            <p>Region : {country.region}</p>
            <p>Area : {country.area}</p>
            <p>Population : {country.population}</p>
        </div>
    );
};

export default CountryInfo;