import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
export default function CartScreen(props) {
  const productId = useParams().id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)
  const {cartItems} = cart;
  console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  }
  const navigate=useNavigate();
  const checkOutHandler = () => {
    navigate('/signin?redirect=/shipping');
  }
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? 
          <MessageBox>
            Cart is empty <Link to={"/"}>Go shoping</Link>
          </MessageBox>
          : 
          <ul>
            {
              cartItems.map((item)=>(
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src = {item.image} alt = {item.name} className="small"/>
                  </div>  
                  <div className="min-30">
                    <Link to = {`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select value = {item.qty} onChange={(e)=>{
                    dispatch(addToCart(item.product,Number(e.target.value)))
                    }}>
                      {[...Array(parseInt(item.countInStock)).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                          </option>
                      )
                    )}
                    </select>
                  </div>
                    <div>${item.price}</div>
                    <div>
                      <button type="submit" onClick = {()=>{removeFromCartHandler(item.product)}}>Delete</button>
                    </div>
                </div>
              </li>
              ))
            }
          </ul> }
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a,c)=>a+c.qty , 0)}) : $
                {cartItems.reduce((a,c)=>a+c.qty*c.price , 0)}
              </h2>
            </li>
            <li>
              <button button="button" onClick={checkOutHandler} className="primary block" 
              disabled = {cartItems.length===0}>Proceed to Checkout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
