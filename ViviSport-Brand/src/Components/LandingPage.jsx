import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/style.css'
import NavBar from './NavBar'
import {ass, bras, bottoms, leggings} from './images'


function LandingPage() {
  return (
    <>
        <>
        <div>
          <div className="top-bar text-center">
              Free Delivery on orders above $100
          </div>
          
          {/* Mobile Search Dropdown */}
          <div className="mobile-search-dropdown d-xl-none" id="mobile-search-dropdown">
              <form className="mobile-search-form" id="mobile-search-form">
                  <input type="text" className="mobile-search-input" placeholder="Search products..." id="mobile-search-input" />
                  <button type="submit" className="mobile-search-btn">
                      <i className="bi bi-search"></i>
                  </button>
              </form>
          </div>
          
          {/* Hero Section */}
          <section className="hero-section">
              <div className="hero-overlay"></div>
              <div className="container">
                  <div className="hero-content">
                      <h1 className="hero-title">Elegance In<br/>Every Movement</h1>
                      <p className="hero-subtitle">Where style meets your workout.</p>
                      <div className="d-flex">
                          <button className="btn btn-light-custom shop-now">Shop Tops</button>
                          <button className="btn btn-outline-custom shop-now">Shop Bottoms</button>
                      </div>
                  </div>
              </div>
          </section>
          
          {/* <!-- Categories Section */}
          <section className="container">
              <h2 className="section-header">Shop The Essentials</h2>
              
              {/* Desktop Grid (4 columns) */}
              <div className="row category-grid">
                  {/* Col 1 */}
                  <div className="col-md-3">
                      <div className="category-card shop-now">
                          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Tops" />
                          <div className="category-text">Tops</div>
                      </div>
                  </div>
                  {/* Col 2 */}
                  <div className="col-md-3">
                      <div className="category-card shop-now">
                          <img src={bottoms} alt="Bottoms" />
                          <div className="category-text">Bottoms</div>
                      </div>
                  </div>
                  {/* Col 3 */}
                  <div className="col-md-3">
                      <div className="category-card shop-now">
                          <img src={bras} alt="Sports Bras" />
                          <div className="category-text">Sports Bras</div>
                      </div>
                  </div>
                  {/* Col 4 */}
                  <div className="col-md-3">
                      <div className="category-card shop-now">
                          <img src={ass} alt="Accessories" />
                          <div className="category-text">Accessories</div>
                      </div>
                  </div>
              </div>
              
              {/* Mobile Slider */}
              <div className="categories-slider">
                  <div className="categories-scroll-container" id="categories-scroll">
                      {/* Slide 1 */}
                      <div className="category-slide">
                          <div className="category-card shop-now">
                              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" alt="Tops" />
                              <div className="category-text">Tops</div>
                          </div>
                      </div>
                      {/* Slide 2 */}
                      <div className="category-slide">
                          <div className="category-card shop-now">
                              <img src={bottoms} alt="Bottoms" />
                              <div className="category-text">Bottoms</div>
                          </div>
                      </div>
                      {/* Slide 3 */}
                      <div className="category-slide">
                          <div className="category-card shop-now">
                              <img src={bras} alt="Sports Bras" />
                              <div className="category-text">Sports Bras</div>
                          </div>
                      </div>
                      {/* Slide 4 */}
                      <div className="category-slide">
                          <div className="category-card shop-now">
                              <img src={ass} alt="Accessories" />
                              <div className="category-text">Accessories</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          
          {/* Hot Right Now Section */}
          <section className="container">
              <div className="d-flex justify-content-between align-items-end mb-4">
                  <h2 className="section-header mb-0 mt-5">Hot Right Now</h2>
                  <a href="#" className="view-all-link" style={{fontSize: '0.8rem'}}>VIEW ALL</a>
              </div>
              <div className="row">
                  {/* Product 1 */}
                  <div className="col-6 col-lg-3">
                      <div className="product-card">
                          <div className="product-img-wrapper">
                              <span className="badge badge-custom badge-sale">Save $20</span>
                              <img src={leggings} alt="Leggings" />
                          </div>
                          <div className="product-title">High-Waist Training Leggings</div>
                          <div className="product-price"><span className="old-price">$69.00</span> $49.00</div>
                          <div className="mt-2">
                              <span className="color-swatch selected" style={{background: '#000'}}></span>
                              <span className="color-swatch" style={{background: "#555"}}></span>
                          </div>
                          <div className="mt-1">
                              <button className="size-selector selected">XS</button>
                              <button className="size-selector">S</button>
                              <button className="size-selector">M</button>
                          </div>
                          <button className="add-to-cart-btn" data-product-id="1" data-product-name="High-Waist Training Leggings" data-product-price="49.00" data-product-image="https://images.unsplash.com/photo-1506619216599-9d939743f39d?q=80&w=2070&auto=format&fit=crop">Add to Cart</button>
                      </div>
                  </div>
                  {/* Product 2 */}
                  <div className="col-6 col-lg-3">
                      <div className="product-card">
                          <div className="product-img-wrapper">
                              <span className="badge badge-custom badge-popular">Popular</span>
                              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" alt="Bra" />
                          </div>
                          <div className="product-title">Ribbed Performance Set</div>
                          <div className="product-price">$58.00</div>
                          <div className="mt-2">
                              <span className="color-swatch selected" style={{background: "#fff", border: "1px solid #ccc"}}></span>
                              <span className="color-swatch" style={{background: "#000"}}></span>
                          </div>
                          <div className="mt-1">
                              <button className="size-selector selected">XS</button>
                              <button className="size-selector">S</button>
                              <button className="size-selector">M</button>
                              <button className="size-selector">L</button>
                          </div>
                          <button className="add-to-cart-btn" data-product-id="2" data-product-name="Ribbed Performance Set" data-product-price="58.00" data-product-image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop">Add to Cart</button>
                      </div>
                  </div>
                  {/* Product 3 */}
                  <div className="col-6 col-lg-3">
                      <div className="product-card">
                          <div className="product-img-wrapper">
                              <span className="badge badge-custom badge-popular">Popular</span>
                              <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" alt="Tights" />
                          </div>
                          <div className="product-title">High-Rise Athletic Tights</div>
                          <div className="product-price">$61.00</div>
                          <div className="mt-2">
                              <span className="color-swatch selected" style={{background: "#D2B48C"}}></span>
                          </div>
                          <div className="mt-1">
                              <button className="size-selector selected">S</button>
                              <button className="size-selector">M</button>
                              <button className="size-selector">L</button>
                          </div>
                          <button className="add-to-cart-btn" data-product-id="3" data-product-name="High-Rise Athletic Tights" data-product-price="61.00" data-product-image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop">Add to Cart</button>
                      </div>
                  </div>
                  {/* Product 4 */}
                  <div className="col-6 col-lg-3">
                      <div className="product-card">
                          <div className="product-img-wrapper">
                              <span className="badge badge-custom badge-new">New</span>
                              <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop" alt="Bra" />
                          </div>
                          <div className="product-title">Full-Support Sports Bra</div>
                          <div className="product-price">$42.00</div>
                          <div className="mt-2">
                              <span className="color-swatch selected" style={{background: "#ADD8E6"}}></span>
                              <span className="color-swatch" style={{background: "#FFB6C1"}}></span>
                          </div>
                          <div className="mt-1">
                              <button className="size-selector selected">XS</button>
                              <button className="size-selector">S</button>
                              <button className="size-selector">M</button>
                          </div>
                          <button className="add-to-cart-btn" data-product-id="4" data-product-name="Full-Support Sports Bra" data-product-price="42.00" data-product-image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop">Add to Cart</button>
                      </div>
                  </div>
              </div>
          </section>
          
          {/* Feature Section */}
          <section className="feature-section">
              <div className="container">
                  <div className="row g-0">
                      <div className="col-md-6">
                          <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" className="feature-img" alt="FlexFit" />
                      </div>
                      <div className="col-md-6 bg-light">
                          <div className="feature-content">
                              <span className="feature-label">Perfect Stretch, Perfect Fit</span>
                              <h2 className="feature-title">Discover FlexFit Freedom</h2>
                              <p className="mb-4 text-muted">Introducing FlexFit: our breakthrough activewear material. It effortlessly adapts to your form for a tailor-made fit without the squeeze. Move with ease and style in every stride.</p>
                              <button className="btn btn-black shop-now">Shop Now</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          
          {/* <!-- Testimonials */}
          <section className="container mb-5">
              <h5 className="fw-bold text-uppercase mb-4">What Do Our Customers Say?</h5>
              <div className="row">
                  <div className="col-md-4 testimonial-box">
                      <div className="stars">★★★★★</div>
                      <div className="testimonial-text">"Love these for the gym!"</div>
                      <div className="testimonial-sub">Verified Buyer</div>
                  </div>
                  <div className="col-md-4 testimonial-box">
                      <div className="stars">★★★★★</div>
                      <div className="testimonial-text">"Sweat? No Problem!"</div>
                      <div className="testimonial-sub">Verified Buyer</div>
                  </div>
                  <div className="col-md-4 testimonial-box">
                      <div className="stars">★★★★★</div>
                      <div className="testimonial-text">"Stylish and Functional"</div>
                      <div className="testimonial-sub">Verified Buyer</div>
                  </div>
              </div>
          </section>
          
          {/* Side Cart (Right Sliding Panel) */}
          <div className="side-cart-overlay" id="cart-overlay"></div>
          
          <div className="side-cart" id="side-cart">
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
          
          <div className="chat-widget">
              <i className="bi bi-chat-dots-fill"></i>
          </div>
        </div>
        <Outlet />
    </>
    </>


  )
}

export default LandingPage