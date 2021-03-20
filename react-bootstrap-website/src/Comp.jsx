import React from "react";
import { NavLink } from "react-router-dom";

const Comp = (props) => {
    return(
        <>
        <section id="header" className="align-items-center">
            <div className="container-fliud">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        
                         <div className="col-md-6 pt-5 pt-lg-0 oder-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                {props.name}  <br/>
                                <strong className="brand-name"> Niraj Inc.</strong>
                            </h1>
                            <h2 className="my-3">
                                We are team of talented developers building websites. 
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">
                                    {props.btname}
                                </NavLink>
                            </div>
                         </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated " alt="Comp img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Comp;