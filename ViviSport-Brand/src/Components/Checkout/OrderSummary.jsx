import React from 'react';

function OrderSummary({ cart, subtotal, shipping, discount, total }) {
  return (
    <aside>
      <div className="summary-card">
        <h3 className="section-title">Order Summary</h3>
        <div id="order-items">
          {cart.map((product) => (
            <div className="summary-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <div><strong>{product.name}</strong></div>
                <div className="item-meta">Size: {product.size} • Qty: {product.quantity}</div>
              </div>
              <div>${product.price}</div>
            </div>
          ))}
        </div>
        <div className="summary-divider"></div>
        <div className="summary-row"><span>Subtotal</span><span id="subtotal">${subtotal.toFixed(2)}</span></div>
        <div className="summary-row"><span>Shipping</span><span id="shipping">${shipping}</span></div>
        <div className="summary-row"><span>Discount</span><span id="discount">${discount}</span></div>
        <div className="summary-divider"></div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <span id="total">${total.toFixed(2)}</span>
        </div>
      </div>
    </aside>
  );
}

export default OrderSummary;