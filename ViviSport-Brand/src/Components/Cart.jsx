import React from 'react'

function Cart({isActive}) {
  return (
    <>
                {/* Side Cart (Right Sliding Panel) */}
    <div className={isActive ? 'side-cart-overlay active' : 'side-cart-overlay'} id="cart-overlay"></div>
          
    <div className={isActive ? 'side-cart active' : 'side-cart'} id="side-cart">
        <div className="side-cart-header">
            <h3 className="side-cart-title">Your Shopping Cart</h3>
            <button className="side-cart-close" id="close-side-cart">
                <i className="bi bi-x"></i>
            </button>
        </div>
        <div className="side-cart-body">
            <div id="cart-items-container">
                {/* Cart items will be dynamically added here */}
                <div className="text-center py-4" id="empty-cart-message">
                    <i className="bi bi-bag" style={{fontSize: "2rem", color: "#ccc"}}></i>
                    <p className="mt-2">Your cart is empty</p>
                </div>
            </div>
        </div>
        <div className="side-cart-footer">
            <div className="cart-total">
                <span>Total:</span>
                <span>$<span id="cart-total-price">0.00</span></span>
            </div>
            <div className="cart-actions">
                    <button type="button" className="btn btn-outline-dark" id="continue-shopping">Continue Shopping</button>
                    <button type="button" className="btn btn-dark" id="checkout-btn">Checkout</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart