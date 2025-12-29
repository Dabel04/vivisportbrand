import React from 'react'
import '../../styles/success.css'

function Success() {
  return (
    <>
     <div className="success-wrapper">
        <div className="success-card">
            <div className="success-icon">✓</div>
            
            <h1 className="success-title">Order Confirmed</h1>
            <p className="success-text">Thank you for shopping with 44:11. Your gear is being prepared for shipment.</p>

            <div className="order-details">
                <div className="detail-row">
                    <span className="detail-label">Order Number</span>
                    <span className="detail-value">#4411-829</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Estimated Delivery</span>
                    <span className="detail-value">3–5 Business Days</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Payment Method</span>
                    <span className="detail-value">Credit Card (**** 4242)</span>
                </div>
            </div>

            <a href="index.html" className="btn-primary">Continue Shopping</a>
            <a href="#" className="btn-secondary">Download Receipt</a>
        </div>
    </div>
    </>
  )
}

export default Success