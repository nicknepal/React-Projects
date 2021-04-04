import React from 'react';
import "./css/style.css";

const Tempapp =()=>{
    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                className="inputField"
                onChange={(event)=>{}
                }
                />
            </div>
            <div className="info">
                <h2 className="location">
                    
                </h2>
                <h1 className="temp">
                    5.25°Cel
                </h1>
                <h3 className="tempmin_max">Min : 5.25°Cel</h3>

            </div>

        </div>
        </>
    )
}

export default Tempapp;