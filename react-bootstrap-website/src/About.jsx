import React from "react";
import Comp from "./Comp";
import usimg from "../src/images/usimg.svg"

const About = () => {
    return(
        <>
        <Comp
            name="Get to know us more"
            imgsrc={usimg}
            visit="./contact"
            btname="Contact Us"
            />
        </>
    );
};

export default About;