import React from 'react'
import '../styles/checkout.css'
import { useAtomValue } from 'jotai'
import { productAtom } from '../App'

function Checkout() {
    const selectedValue = useAtomValue(productAtom);
    const shipping = 10;
    const discount = 0; // You can make this dynamic later
    
    // Calculate subtotal from all products
    const subtotal = selectedValue.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    
    // Calculate total
    const total = subtotal + shipping - discount;
  return (
    <>
      
    {/* HEADER */}
    <header className="payment-header">
        <div className="payment-header-inner">
            <div className="payment-brand">44:11</div>
            <div className="payment-secure-badge">🔒 Secure Checkout</div>
        </div>
    </header>

    <div className="payment-container">

        {/* LEFT SIDE */}
        <div>
            {/* CONTACT INFO */}
            <div className="payment-section">
                <h2 className="section-title">Contact Information</h2>

                <label>Email Address</label>
                <input type="email" id="email" placeholder="you@example.com"/>

                <label style={{marginTop: '15px'}}>Phone Number</label>
                <input type="text" id="phone" placeholder="+234 801 234 5678"/>
            </div>

            {/* SHIPPING ADDRESS */}
            <div className="payment-section">
                <h2 className="section-title">Shipping Address</h2>

                <label>Full Name</label>
                <input type="text" id="fullName" placeholder="John Doe"/>

                <label style={{marginTop: '15px'}}>Street Address</label>
                <input type="text" id="address" placeholder="123 Athlete Way"/>

                <div className="two-cols">
                    <div>
                        <label>City</label>
                        <input type="text" id="city" placeholder="Lagos"/>
                    </div>

                    <div>
                        <label>Postal Code</label>
                        <input type="text" id="zip" placeholder="100001"/>
                    </div>
                </div>

                <label>Country</label>
                <select id="country">
                    <option>Nigeria</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                </select>
            </div>

            {/* DELIVERY OPTIONS */}
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

            {/* PAYMENT METHOD */}
            <div className="payment-section">
                <h2 className="section-title">Payment Method</h2>

                <div className="payment-tabs">
                    <button className="payment-tab-btn payment-tab-active" data-tab="card">Credit Card</button>
                    <button className="payment-tab-btn" data-tab="apple">Apple Pay</button>
                    <button className="payment-tab-btn" data-tab="paypal">PayPal</button>
                </div>

                {/* CARD FORM */}
                <div className="payment-method-content payment-method-active" id="tab-card">
                    <label>Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000"/>

                    <div className="two-cols" style={{marginTop: '15px'}}>
                        <div>
                            <label>Expiry Date</label>
                            <input type="text" placeholder="MM / YY"/>
                        </div>
                        <div>
                            <label>CVC</label>
                            <input type="text" placeholder="123"/>
                        </div>
                    </div>

                    <label style={{marginTop: '15px'}}>Name on Card</label>
                    <input type="text" placeholder="Full Name"/>
                </div>

                {/* APPLE PAY */}
                <div className="payment-method-content" id="tab-apple">
                    <p>Use Apple Pay on supported devices.</p>
                    <button className="btn-primary">Pay with  Apple Pay</button>
                </div>

                {/* PAYPAL */}
                <div className="payment-method-content" id="tab-paypal">
                    <p>You will be redirected to PayPal to complete payment.</p>
                    <button className="btn-primary">Continue to PayPal</button>
                </div>
            </div>

            {/* DISCOUNT CODE */}
            <div className="payment-section">
                <h2 className="section-title">Discount Code</h2>

                <div className="discount-row">
                    <input type="text" id="discountInput" placeholder="Enter promo code"/>
                    <button className="apply-btn" id="applyDiscount">Apply</button>
                </div>

                <p id="discountMessage" style={{marginTop:'10px', fontSize:'13px'}}></p>
            </div>

            {/* TERMS */}
            <div className="terms">
                <input type="checkbox" id="termsCheck"/>
                <label forhtml="termsCheck">I agree to the Terms & Conditions and Refund Policy.</label>
            </div>

            {/* PLACE ORDER BUTTON */}
            <button className="btn-primary" id="placeOrderBtn" disabled>Place Order</button>
        </div>

        {/* RIGHT SIDE (ORDER SUMMARY) */}
        <aside>
            <div className="summary-card">
                <h3 className="section-title">Order Summary</h3>
                <div id="order-items">
                    {
                        selectedValue.map((product) => (
                    <div className="summary-item" key={product.id}>
                        <img src={product.image}/>
                        <div>
                            <div><strong>{product.name}</strong></div>
                            <div className="item-meta">Size: {product.size} • Qty: {product.quantity}</div>

                        </div>
                        <div>${product.price}</div>
                    </div>
                        ))
                    }
                </div>
                <div className="summary-divider"></div>

                <div className="summary-row"><span>Subtotal</span><span id="subtotal">${subtotal}</span></div>
                <div className="summary-row"><span>Shipping</span><span id="shipping">${shipping}</span></div>
                <div className="summary-row"><span>Discount</span><span id="discount">${discount}</span></div>

                <div className="summary-divider"></div>

                <div className="summary-row summary-total">
                    <span>Total</span>
                    <span id="total">${total}</span>
                </div>
            </div>
        </aside>

    </div>
    </>
  )
}

export default Checkout