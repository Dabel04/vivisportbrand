import React from 'react';

function PaymentMethod({ activeTab, setActiveTab, cardDetails, handleInputChange }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="payment-section">
      <h2 className="section-title">Payment Method</h2>
      <div className="payment-tabs">
        <button
          className={`payment-tab-btn ${activeTab === 'card' ? 'payment-tab-active' : ''}`}
          onClick={() => handleTabClick('card')}>
          Credit Card
        </button>
        <button
          className={`payment-tab-btn ${activeTab === 'apple' ? 'payment-tab-active' : ''}`}
          onClick={() => handleTabClick('apple')}>
          Apple Pay
        </button>
        <button
          className={`payment-tab-btn ${activeTab === 'paypal' ? 'payment-tab-active' : ''}`}
          onClick={() => handleTabClick('paypal')}>
          PayPal
        </button>
      </div>

      {activeTab === 'card' && (
        <div className="payment-method-content payment-method-active" id="tab-card">
          <label>Card Number</label>
          <input type="text" name="number" value={cardDetails.number} onChange={handleInputChange} placeholder="0000 0000 0000 0000"/>
          <div className="two-cols form-row">
            <div>
              <label>Expiry Date</label>
              <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleInputChange} placeholder="MM / YY"/>
            </div>
            <div>
              <label>CVC</label>
              <input type="text" name="cvc" value={cardDetails.cvc} onChange={handleInputChange} placeholder="123"/>
            </div>
          </div>
          <label className="form-row">Name on Card</label>
          <input type="text" name="name" value={cardDetails.name} onChange={handleInputChange} placeholder="Full Name"/>
        </div>
      )}

      {activeTab === 'apple' && (
        <div className="payment-method-content payment-method-active" id="tab-apple">
          <p>Use Apple Pay on supported devices.</p>
          <button className="btn-primary">Pay with  Apple Pay</button>
        </div>
      )}

      {activeTab === 'paypal' && (
        <div className="payment-method-content payment-method-active" id="tab-paypal">
          <p>You will be redirected to PayPal to complete payment.</p>
          <button className="btn-primary">Continue to PayPal</button>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;