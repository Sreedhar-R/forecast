import React from 'react';
import './Weather.css';

const Weather = ({closePopup,name,temp,description}) =>{
    return(
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" onClick={closePopup}>
                    x
                </div>
                <div className="dib" className="content">
                    <br></br>
                    <h3>{name}</h3>
                    <p>Temp: {temp} K</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;