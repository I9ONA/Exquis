import React from 'react';
import '../CSS/Payement.css';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const navigate = useNavigate()
    const Confirmpayement = () =>{
        alert('Your information has been checked successfully!');
        navigate('/')
        
    }
  return (
    <div className="checkout-container">
      <form>
        <div className="checkout-col">
          <h3 className="checkout-title">Billing Address</h3>
          <div className="checkout-inputBox">
            <span>Full Name:</span>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="checkout-inputBox">
            <span>Email:</span>
            <input type="email" placeholder="example@example.com" />
          </div>
          <div className="checkout-inputBox">
            <span>Address:</span>
            <input type="text" placeholder="Room - Street - Locality" />
          </div>
          <div className="checkout-inputBox">
            <span>City:</span>
            <input type="text" placeholder="Mumbai" />
          </div>
          <div className="flex-container">
            <div className="checkout-inputBox">
              <span>State:</span>
              <input type="text" placeholder="India" />
            </div>
            <div className="checkout-inputBox">
              <span>Zip Code:</span>
              <input type="text" placeholder="123 456" />
            </div>
          </div>
        </div>

        <div className="checkout-col">
          <h3 className="checkout-title">Payment</h3>
          <div className="checkout-inputBox">
            <span>Cards Accepted:</span>
            <img src="images/card_img.png" alt="Accepted Cards" />
          </div>
          <div className="checkout-inputBox">
            <span>Name on Card:</span>
            <input type="text" placeholder="Mr. John Doe" />
          </div>
          <div className="checkout-inputBox">
            <span>Credit Card Number:</span>
            <input type="text" placeholder="1111-2222-3333-4444" />
          </div>
          <div className="checkout-inputBox">
            <span>Exp Month:</span>
            <input type="text" placeholder="January" />
          </div>
          <div className="flex-container">
            <div className="checkout-inputBox">
              <span>Exp Year:</span>
              <input type="text" placeholder="2022" />
            </div>
            <div className="checkout-inputBox">
              <span>CVV:</span>
              <input type="text" placeholder="1234" />
            </div>
          </div>
        </div>
        <button className="checkout-submit-btn" onClick={()=>Confirmpayement()}>Proceed to Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
