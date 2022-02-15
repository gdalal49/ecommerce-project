import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps";
export default function PaymentMethod() {
    const {shippingAddress} = useSelector(state=>state.cart);
    const navigate=useNavigate();
    const [payMentMethod,setPayMentMethod]=useState("PayPal");
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!shippingAddress.address){
            navigate('/shipping');
        }
    },[dispatch,shippingAddress]);
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(savePaymentMethod(payMentMethod))
        navigate('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={onSubmitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" 
                        value="Paypal" name="PaymentMethod"
                        required checked onChange={(e)=>setPayMentMethod(e.target.value)}/>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="stripe" 
                        value="Stripe" name="PaymentMethod"
                        required onChange={(e)=>setPayMentMethod(e.target.value)}/>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}
