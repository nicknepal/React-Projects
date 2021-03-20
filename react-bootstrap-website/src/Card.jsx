import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";


const Card = (props) => {
    return(
        <> <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrcs } class="card-img-top" alt={props.imgsrcs} />
                    <div className="card-body">
                        <h5 className="card-title">{props.cardtitle}</h5>
                        <p className="card-text">{props.cardtext}</p>
                        <NavLink to="/#" class="btn-get-started">Learn more...</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;