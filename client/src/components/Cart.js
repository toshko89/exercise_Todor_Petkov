import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../app/cart.js";
import { v4 as uuidv4 } from 'uuid';
import CartCard from "./CartCard.js";

export default function Cart() {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.cart.orders);
  const navigate = useNavigate();

  function addToCartClick(item) {
    dispatch(addToCart(item));
  }

  function removeFromCartClick(item) {
    dispatch(removeFromCart(item))
  }

  async function placeOrder(e) {
    e.preventDefault();
    dispatch(clearCart());
    navigate("/");
  }

  console.log(orders);

  return (
    <div className="container position-relative">
      <div className="col-md-4">
        {orders.length === 0 &&
          <>
            <h2 className="font-weight-bold mb-3">Your cart is empty, check your offers:</h2>
            <Link to={'/'} className="btn btn-success btn-block btn-lg">Restaurants<i className="feather-arrow-right"></i></Link>
          </>}
        {orders.length > 0 &&
          <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
            <div className="bg-white border-bottom py-2">
              {orders.map(product => <CartCard item={product} key={uuidv4()}
                addToCartClick={addToCartClick} removeFromCartClick={removeFromCartClick} />)}
            </div>
            <div className="bg-white p-3 clearfix border-bottom">
              <p className="mb-1">Item Total <span className="float-right text-dark">${''}</span></p>
              <p className="mb-1">Delivery Fee<span className="text-info ml-1"></span><span className="float-right text-dark">${''}</span></p>
              <h6 className="font-weight-bold mb-0">TO PAY <span className="float-right">${''}</span></h6>
            </div>
            <div className="p-3">
              <button onClick={placeOrder} className="btn btn-success btn-block btn-lg">PAY ${''}<i className="feather-arrow-right"></i></button>
            </div>
          </div>}
      </div>
    </div>
  );
}