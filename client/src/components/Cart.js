import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../app/cart.js";
import { v4 as uuidv4 } from 'uuid';
import CartCard from "./CartCard.js";

export default function Cart() {

  const dispatch = useDispatch();
  const orders = useSelector(state => state.cart.orders);
  const navigate = useNavigate();

  const calculateTotal = (ordersArr) => {

    console.log(ordersArr);

    if (ordersArr.length === 0) {
      return 0;
    }

    let total = 0;
    let deal2for3 = ordersArr.filter(order => order.deal === '2 for 3');
    let min = Math.min(...deal2for3.map(product => product.price));

    deal2for3.forEach(product => {
      if (product.quantity > 2) {
        total += (product.quantity * product.price) - min;
      } else {
        total += product.price * product.quantity;
      }
    })

    const deals1for1 = ordersArr.filter(order => order.deal === 'Buy 1 get 1 half price');

    deals1for1.forEach(deal => {
      if (deal.quantity % 2 === 0) {
        total += (deal.quantity * deal.price) - (deal.price / 2);
      } else {
        total += deal.price * deal.quantity;
      }
    })

    return total.toFixed(2);
  }

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

  return (
    <div className="position-relative">
      <div className="col-md-4">
        {orders.length === 0 &&
          <>
            <h2 className="font-weight-bold mb-3">Your cart is empty, check your offers:</h2>
            <Link to={'/'} className="btn btn-success btn-block btn-lg">Groceries Shop<i className="feather-arrow-right"></i></Link>
          </>}
        {orders.length > 0 &&
          <div className="osahan-cart-item rounded rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
            <div className="bg-white border-bottom py-2">
              {orders.map(product => <CartCard item={product} key={uuidv4()}
                addToCartClick={addToCartClick} removeFromCartClick={removeFromCartClick} />)}
            </div>
            <div className="bg-white p-3 clearfix border-bottom">
              <p className="mb-1">Item Total <span className="float-right text-dark">{calculateTotal(orders)} aws</span></p>
              
              <h6 className="font-weight-bold mb-0">TO PAY <span className="float-right">aws</span></h6>
            </div>
            <div className="p-3">
              <button onClick={placeOrder} className="btn btn-success btn-block btn-lg">PAY {calculateTotal(orders)} aws<i className="feather-arrow-right"></i></button>
            </div>
          </div>}
      </div>
    </div>
  );
}