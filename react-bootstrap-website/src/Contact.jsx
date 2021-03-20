import React, { useState } from "react";
import ContactImg from "../src/images/location.svg";
import "./index.css";



const Contact = () => {
    const [data, setData] = useState({
        fullname :"",
        phone :"",
        email :"",
        msg : "",
    });

    const InputEvent = (event) =>{
        const {name , value} = event.target;

        setData((preval)=>{
            return {
                ...preval,
                [name] : value,
            };
        });
    };


    const formSubmit = (e)=> {
        e.preventDefault();
        alert(`Name: ${data.fullname} 
Email: ${data.email} 
Phone: ${data.phone} 
Message: ${data.msg}`);
    };

    return(
        <>
        <div className="my-5">
            <h4 className="text-center">We like to hear from you. Let's talk.</h4>
        </div>
        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-6 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Niraj Thapa Chhetry" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="nirajthapachhetry@gmail.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone/Mobile</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="+977-9847279281" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write anything to us.</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} placeholder="Starting Typing here..."  rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">
                                Submit from
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4 order-1 header-img">
                        <img src={ContactImg} className="img-fluid animated " alt="ContactImg img" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;