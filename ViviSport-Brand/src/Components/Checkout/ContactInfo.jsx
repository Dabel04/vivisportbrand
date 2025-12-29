import React from 'react';

function ContactInfo({ contactInfo, handleContactChange }) {
  return (
    <div className="payment-section">
      <h2 className="section-title">Contact Information</h2>
      <label>Email Address</label>
      <input type="email" id="email" placeholder="you@example.com" value={contactInfo.email} onChange={handleContactChange}/>
      <label className="form-row">Phone Number</label>
      <input type="text" id="phone" placeholder="+234 801 234 5678" value={contactInfo.phone} onChange={handleContactChange}/>
    </div>
  );
}

export default ContactInfo;