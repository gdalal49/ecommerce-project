import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";
export default function PlaceOrderScreen() {
    const cart=useSelector(state=>state.cart);
    console.log(cart);
    const navigate=useNavigate();
    useEffect(()=>{
        if(Object.keys(cart.shippingAddress).length===0){
            navigate('/payment');
        }
    },[cart]);
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <li>
                        <ul>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>
                                        Name:
                                    </strong>
                                    {cart.shippingAddress.fullname}<br/>
                                </p>
                            </div>
                        </ul>
                    </li>
                </div>
                <div className="col-1">
                    
                </div>
            </div>
        </div>
    )
}
