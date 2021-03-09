import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'

const Country = (props) => {


    const { name, flag } = props.country;
    const history = useHistory();

    const handleShowDetails = (name) => {
        history.push(`/country/${name}`);
    }

    return (
        <div className="country" style={{ backgroundImage: `url(${flag})` }}>
            <h2>{name}</h2>
            <p>
                <Link to={`/country/${name}`}>Show Details</Link>
            </p><br></br>
            <button onClick={() => handleShowDetails(name)}> Show Details</button>
        </div>
    );
};

export default Country;