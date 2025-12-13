import React, { useState } from 'react'
import { useSetAtom } from 'jotai'
import { productAtom } from '../App'
import Checkout from './Checkout'

function Cart({isActive, selectedValue, setIsActive}) {
    const cartTotal = selectedValue.reduce((s, i) => s + (i.price || 0) * (i.quantity || 0), 0).toFixed(2)
    const setSelectedValue = useSetAtom(productAtom)
    const [showCheckOut, setShowCheckOut] = useState(false)
    
    function removeFromCart(id, size, colorValue) {
        setSelectedValue(prev => prev.filter(p => 
            !(p.id === id && p.size === size && p.color.value === colorValue)
        ))
    }
  return (
    <>
                {/* Side Cart (Right Sliding Panel) */}
    <div className={isActive ? 'side-cart-overlay active' : 'side-cart-overlay'} id="cart-overlay"></div>
          
    <div className={isActive ? 'side-cart active' : 'side-cart'} id="side-cart">
        <div className="side-cart-header">
            <h3 className="side-cart-title">Your Shopping Cart</h3>
            <button className="side-cart-close" id="close-side-cart" onClick={() => setIsActive(false)}>
                <i className="bi bi-x"></i>
            </button>
        </div>
        <div className="side-cart-body">
            <div id="cart-items-container">
                {/* Cart items will be dynamically added here */}
                {selectedValue.length === 0 ? (
                    <div className="text-center py-4" id="empty-cart-message">
                    <i className="bi bi-bag" style={{fontSize: "2rem", color: "#ccc"}}></i>
                    <p className="mt-2">Your cart is empty</p>
                </div>
                ) : (
                    selectedValue.map((ci) => (
                        <div className="cart-item" key={`${ci.id}`}>
                            <img src={ci.image} className="cart-item-img" alt={ci.name}/>
                            <div className="cart-item-details">
                                <div className="cart-item-title">{ci.name}</div>
                                <div className="cart-item-price">${ci.price.toFixed(2)} × {ci.quantity}</div>
                                <div className="small text-muted">
                                  Size: {ci.size} | Color: 
                                  <span 
                                    className="d-inline-block ms-1" 
                                    style={{
                                      width: '12px', 
                                      height: '12px', 
                                      border:  '1px solid #ddd',
                                      borderRadius: '50%',
                                      verticalAlign: 'middle',
                                      backgroundColor: ci.color.value
                                    }}
                                  ></span>
                                  <span className="ms-1">{ci.color.name}</span>
                                </div>
                            </div>
                            <button className="cart-item-remove" onClick={() => removeFromCart(ci.id, ci.size, ci.color.value)}>
                                <i className="bi bi-x"></i>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
        <div className="side-cart-footer">
            <div className="cart-total">
                <span>Total:</span>
                <span>$<span id="cart-total-price">{cartTotal}</span></span>
            </div> 
            <div className="cart-actions">
                    <button type="button" className="btn btn-outline-dark" id="continue-shopping">Continue Shopping</button>
                    <button type="button" className="btn btn-dark" id="checkout-btn" onClick={() =>setShowCheckOut(!showCheckOut)}>Checkout</button>
            </div>

            {/*  Conditional Rendering of the checkout  */}
            {showCheckOut && <Checkout />}
        </div>
    </div>
    </>
  )
}

export default Cart