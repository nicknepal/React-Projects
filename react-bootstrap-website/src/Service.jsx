import React from "react";
import Ser1 from "../src/images/ser-1.svg";
import Ser2 from "../src/images/ser-2.svg";
import Ser3 from "../src/images/ser-3.svg";
import Ser4 from "../src/images/ser-4.svg";
import Ser5 from "../src/images/ser-5.svg";
import Ser6 from "../src/images/ser-6.svg";
import Card from "./Card";



const Service = () => {
    return(
        <>
        
        <div className="my-5">
            <h4 className="text-center">These are the services we offer.</h4>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
        
                        <Card 
                            imgsrcs={ Ser5}
                            cardtitle="Web Design & Development"
                            cardtext="We offer great web design and development service which is great for our business."        
                        />

                        <Card 
                            imgsrcs={ Ser2}
                            cardtitle="Mobile App development"
                            cardtext="We offer great web design and development service which is great for our business."        
                        />

                        <Card 
                            imgsrcs={ Ser3}
                            cardtitle="SEO Service"
                            cardtext="We offer great web design and development service which is great for our business."        
                        />

                        <Card 
                            imgsrcs={ Ser4}
                            cardtitle="Facebook Boosting"
                            cardtext="We offer great web design and development service which is great for our business."        
                        />

                        <Card 
                            imgsrcs={ Ser1}
                            cardtitle="Server Installation"
                            cardtext="We offer great web design and development service which is great for our business."        
                        />

                        <Card 
                        imgsrcs={ Ser6}
                        cardtitle="Computer Networking"
                        cardtext="We offer great web design and development service which is great for our business."        
                        />
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Service;


