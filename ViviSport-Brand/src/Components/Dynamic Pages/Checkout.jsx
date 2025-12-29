import React, { useState } from 'react';
import '../../styles/checkout.css'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom';
import ContactInfo from '../Checkout/ContactInfo';
import ShippingAddress from '../Checkout/ShippingAddress';
import PaymentMethod from '../Checkout/PaymentMethod';
import OrderSummary from '../Checkout/OrderSummary';

function Checkout() {
    const { cart, getCartTotal } = useCart()
    const [activeTab, setActiveTab] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    });
    const [contactInfo, setContactInfo] = useState({
        email: '',
        phone: ''
    });
    const [shippingAddress, setShippingAddress] = useState({
        fullName: '',
        address: '',
        city: '',
        zip: '',
        country: 'Nigeria'
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const isContactInfoValid = Object.values(contactInfo).every(field => field.trim() !== '');
    const isShippingAddressValid = Object.values(shippingAddress).every(field => field.trim() !== '');
    const isCardDetailsValid = activeTab !== 'card' || Object.values(cardDetails).every(field => field.trim() !== '');
    const isFormValid = isContactInfoValid && isShippingAddressValid && isCardDetailsValid && termsAccepted;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleContactChange = (e) => {
        const { id, value } = e.target;
        setContactInfo(prev => ({ ...prev, [id]: value }));
    };

    const handleShippingChange = (e) => {
        const { id, value } = e.target;
        setShippingAddress(prev => ({ ...prev, [id]: value }));
    };

    const shipping = 10;
    const discount = 0; //make this dynamic later prolly
    
    // Calculate subtotal from all products
    const subtotal = getCartTotal();
    
    // Calculate total
    const total = subtotal + shipping - discount;
  return (
    <>
      
    <header className="payment-header">
        <div className="payment-header-inner">
            <div className="payment-brand">44:11</div>
            <div className="payment-secure-badge">🔒 Secure Checkout</div>
        </div>
    </header>

    <div className="payment-container">

        <div>
            <ContactInfo contactInfo={contactInfo} handleContactChange={handleContactChange} />
            <ShippingAddress shippingAddress={shippingAddress} handleShippingChange={handleShippingChange} />

            <div className="payment-section">
                <h2 className="section-title">Delivery Method</h2>

                <label>
                    <input type="radio" name="delivery" value="standard" checked/>
                    Standard Delivery — $10.00 (3–5 days)
                </label><br/>

                <label>
                    <input type="radio" name="delivery" value="express"/>
                    Express Delivery — $25.00 (1–2 days)
                </label>
            </div>

            <PaymentMethod activeTab={activeTab} setActiveTab={setActiveTab} cardDetails={cardDetails} handleInputChange={handleInputChange} />

            <div className="payment-section">
                <h2 className="section-title">Discount Code</h2>

                <div className="discount-row">
                    <input type="text" id="discountInput" placeholder="Enter promo code"/>
                    <button className="apply-btn" id="applyDiscount">Apply</button>
                </div>

                <p id="discountMessage" style={{marginTop:'10px', fontSize:'13px'}}></p>
            </div>

            <div className="terms">
                <input type="checkbox" id="termsCheck" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)}/>
                <label htmlFor="termsCheck">I agree to the Terms & Conditions and Refund Policy.</label>
            </div>

            <Link to='/success'>
            <button className="btn-primary" id="placeOrderBtn" disabled={!isFormValid}>
                Place Order
            </button>
            </Link>
        </div>

        <OrderSummary cart={cart} subtotal={subtotal} shipping={shipping} discount={discount} total={total} />

    </div>
    </>
  )
}

export default Checkout
