import React from "react";
import Comp from "./Comp";
import meet from '../src/images/websites.svg';

const Home = () => {
    return(
        <>
            <Comp
            name="Grow your business with"
            imgsrc={ meet }
            visit="./service"
            btname="Get Started"
            />
        </>
    );
};

export default Home;