import React from 'react';

function ShippingAddress({ shippingAddress, handleShippingChange }) {
  return (
    <div className="payment-section">
      <h2 className="section-title">Shipping Address</h2>
      <label>Full Name</label>
      <input type="text" id="fullName" placeholder="John Doe" value={shippingAddress.fullName} onChange={handleShippingChange}/>
      <label className="form-row">Street Address</label>
      <input type="text" id="address" placeholder="123 Athlete Way" value={shippingAddress.address} onChange={handleShippingChange}/>
      <div className="two-cols">
        <div>
          <label>City</label>
          <input type="text" id="city" placeholder="Lagos" value={shippingAddress.city} onChange={handleShippingChange}/>
        </div>
        <div>
          <label>Postal Code</label>
          <input type="text" id="zip" placeholder="100001" value={shippingAddress.zip} onChange={handleShippingChange}/>
        </div>
      </div>
      <label>Country</label>
      <select id="country" value={shippingAddress.country} onChange={handleShippingChange}>
        <option>Nigeria</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
      </select>
    </div>
  );
}

export default ShippingAddress;