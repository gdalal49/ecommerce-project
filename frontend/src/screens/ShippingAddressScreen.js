import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useResolvedPath } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps";

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const cartItem=useSelector(state=>state.cart);
    const {userInfo}=userSignin;
    const [fullName,setFullName]=useState(cartItem.shippingAddress.fullName||"");
    const [address,setAddress]=useState(cartItem.shippingAddress.address||"");
    const [city,setCity]=useState(cartItem.shippingAddress.city||"");
    const [postalCode,setPostalCode]=useState(cartItem.shippingAddress.postalCode||"");
    const [country,setCountry]=useState(cartItem.shippingAddress.country||"");
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!userInfo){
            navigate('/signin?=shipping');
        }
    },[userInfo,cartItem,dispatch])
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(
            saveShippingAddress({fullName,address,city,postalCode,country})
        );
        navigate('/payment');
    }
  return (
      <div>
          <CheckoutSteps step1 step2></CheckoutSteps>
          <form className="form" onSubmit={onSubmitHandler}>
              <div>
                  <h1>Shipping Address</h1>                  
              </div>
              <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="Enter your Full name"
                    value={fullName}
                    onChange = {(e)=>setFullName(e.target.value)}
                    required
                    ></input>
              </div>
              <div>
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" placeholder="Enter your Address"
                    value={address}
                    onChange = {(e)=>setAddress(e.target.value)}
                    required
                    ></input>
              </div>
              <div>
                  <label htmlFor="city">Full Name</label>
                  <input type="text" id="city" placeholder="Enter your City"
                    value={city}
                    onChange = {(e)=>setCity(e.target.value)}
                    required
                    ></input>
              </div>
              <div>
                  <label htmlFor="postalCode">Postal Code</label>
                  <input type="text" id="postalCode" placeholder="Enter your Postal Code"
                    value={postalCode}
                    onChange = {(e)=>setPostalCode(e.target.value)}
                    required
                    ></input>
              </div>
              <div>
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" placeholder="Enter your Country"
                    value={country}
                    onChange = {(e)=>setCountry(e.target.value)}
                    required
                    ></input>
              </div>
              <div>
                  <label />
                  <button className="primary" type="submit">Continue...</button>
              </div>
          </form>
      </div>
  )
}
