import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/style.css'
import Navbar from './NavBar'

function LandingPage() {
  return (
    <>
        <>
        <div>
          <div className="top-bar text-center">
              Free Delivery on orders above $100
          </div>
          
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3">
              <div className="container">
                  <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <a className="navbar-brand" href="#">44:11</a>
                  
                  {/* Mobile Icons Container */}
                  <div className="mobile-icons-container d-lg-none">
                      <div className="nav-icons mobile-version">
                          <i className="bi bi-search" id="mobile-search-toggle"></i>
                          <i className="bi bi-person"></i>
                          <div className="position-relative">
                              <i className="bi bi-bag cart-icon" id="open-side-cart"></i>
                              <span id="cart-count-mobile" className="cart-count">0</span>
                          </div>
                      </div>
                  </div>
                  
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav mx-auto">
                          <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
                          <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                      </ul>
                      
                      <div className="mobile-currency d-lg-none">
                          <div className="currency-selector" id="mobile-currency-toggle">
                              Currency: <span id="mobile-currency-text">USD $</span> <i className="bi bi-chevron-down"></i>
                          </div>
                      </div>
                  </div>
                  
                  {/* Desktop Icons */}
                  <div className="nav-icons d-none d-lg-flex align-items-center">
                      {/* Currency Dropdown */}
                      <div className="position-relative">
                          <div className="currency-selector" id="desktop-currency-toggle">
                              <span id="desktop-currency-text">USD $</span> <i className="bi bi-chevron-down"></i>
                          </div>
                          <div className="currency-dropdown" id="desktop-currency-dropdown">
                              <div className="currency-item active" data-currency="USD">USD $</div>
                              <div className="currency-item" data-currency="EUR">EUR €</div>
                              <div className="currency-item" data-currency="GBP">GBP £</div>
                              <div className="currency-item" data-currency="CAD">CAD $</div>
                          </div>
                      </div>
                      
                      {/* Search Dropdown */}
                      <div className="position-relative">
                          <i className="bi bi-search" id="desktop-search-toggle"></i>
                          <div className="search-dropdown" id="desktop-search-dropdown">
                              <form className="search-form" id="desktop-search-form">
                                  <input type="text" className="search-input" placeholder="Search products..." id="desktop-search-input"/>
                                  <button type="submit" className="search-btn">
                                      <i className="bi bi-search"></i>
                                  </button>
                              </form>
                              <div className="search-suggestions">
                                  <div className="suggestion-title">Popular Searches</div>
                                  <a href="#" className="suggestion-item">Leggings</a>
                                  <a href="#" className="suggestion-item">Sports Bras</a>
                                  <a href="#" className="suggestion-item">Training Sets</a>
                                  <a href="#" className="suggestion-item">Accessories</a>
                              </div>
                          </div>
                      </div>
                      
                      <i className="bi bi-person"></i>
                      
                      <div className="position-relative">
                          <i className="bi bi-bag cart-icon" id="open-side-cart-desktop"></i>
                          <span id="cart-count-desktop" className="cart-count">0</span>
                      </div>
                  </div>
              </div>
          </nav>
          
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
                          <img src="img/bottoms.jpg" alt="Bottoms" />
                          <div className="category-text">Bottoms</div>
                      </div>
                  </div>
                  {/* Col 3 */}
                  <div className="col-md-3">
                      <div className="category-card shop-now">
                          <img src="img/bras.jpg" alt="Sports Bras" />
                          <div className="category-text">Sports Bras</div>
                      </div>
                  </div>
                  {/* Col 4 */}
                  <div className="col-md-3">
                      <div className="category-card shop-now">
                          <img src="https://images.unsplash.com/photo-1623945419356-9d3298c4d29a?q=80&w=2070&auto=format&fit=crop" alt="Accessories" />
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
                              <img src="img/bottoms.jpg" alt="Bottoms" />
                              <div className="category-text">Bottoms</div>
                          </div>
                      </div>
                      {/* Slide 3 */}
                      <div className="category-slide">
                          <div className="category-card shop-now">
                              <img src="img/bras.jpg" alt="Sports Bras" />
                              <div className="category-text">Sports Bras</div>
                          </div>
                      </div>
                      {/* Slide 4 */}
                      <div className="category-slide">
                          <div className="category-card shop-now">
                              <img src="img/ass.jpg" alt="Accessories" />
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
                  <a href="#" className="view-all-link" style={{'fontSize': '0.8rem'}}>VIEW ALL</a>
              </div>
              <div className="row">
                  {/* Product 1 */}
                  <div className="col-6 col-lg-3">
                      <div className="product-card">
                          <div className="product-img-wrapper">
                              <span className="badge badge-custom badge-sale">Save $20</span>
                              <img src="img/leggings.jpg" alt="Leggings" />
                          </div>
                          <div className="product-title">High-Waist Training Leggings</div>
                          <div className="product-price"><span className="old-price">$69.00</span> $49.00</div>
                          <div className="mt-2">
                              <span className="color-swatch selected" style={{'background': '#000'}}></span>
                              <span className="color-swatch" style={{"background": "#555"}}></span>
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
                              <span className="color-swatch selected" style={{"background": "#fff", "border": "1px solid #ccc"}}></span>
                              <span className="color-swatch" style={{"background": "#000"}}></span>
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
                              <span className="color-swatch selected" style={{"background": "#D2B48C"}}></span>
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
                              <span className="color-swatch selected" style={{"background": "#ADD8E6"}}></span>
                              <span className="color-swatch" style={{"background": "#FFB6C1"}}></span>
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
          
          {/* Footer */}
          <footer className="footer">
              <div className="container">
                  <div className="row">
                      {/* Brand & Description */}
                      <div className="col-lg-4 col-md-6 mb-5">
                          <a href="#" className="footer-brand">44:11</a>
                          <p className="footer-tagline">
                              Elevate your workout with premium activewear designed for performance and style. 
                              Experience the perfect blend of comfort, durability, and elegance in every piece.
                          </p>
                          <div className="newsletter-form">
                              <input type="email" className="newsletter-input" placeholder="Your email address" />
                              <button type="submit" className="newsletter-btn">Subscribe</button>
                          </div>
                          <div className="social-icons">
                              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
                              <a href="#" className="social-icon"><i className="bi bi-pinterest"></i></a>
                              <a href="#" className="social-icon"><i className="bi bi-tiktok"></i></a>
                          </div>
                      </div>
                      
                      {/* Quick Links */}
                      <div className="col-lg-2 col-md-6 mb-5">
                          <h6 className="footer-title">Shop</h6>
                          <ul className="footer-links">
                              <li><a href="#">Tops</a></li>
                              <li><a href="#">Bottoms</a></li>
                              <li><a href="#">Sports Bras</a></li>
                              <li><a href="#">Accessories</a></li>
                              <li><a href="#">New Arrivals</a></li>
                              <li><a href="#">Best Sellers</a></li>
                          </ul>
                      </div>
                      
                      {/* Support */}
                      <div className="col-lg-2 col-md-6 mb-5">
                          <h6 className="footer-title">Support</h6>
                          <ul className="footer-links">
                              <li><a href="#">Contact Us</a></li>
                              <li><a href="#">FAQ</a></li>
                              <li><a href="#">Shipping</a></li>
                              <li><a href="#">Returns</a></li>
                              <li><a href="#">Size Guide</a></li>
                              <li><a href="#">Care Instructions</a></li>
                          </ul>
                      </div>
                      
                      {/* Company */}
                      <div className="col-lg-2 col-md-6 mb-5">
                          <h6 className="footer-title">Company</h6>
                          <ul className="footer-links">
                              <li><a href="#">About Us</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Sustainability</a></li>
                              <li><a href="#">Careers</a></li>
                              <li><a href="#">Press</a></li>
                              <li><a href="#">Wholesale</a></li>
                          </ul>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="col-lg-2 col-md-6 mb-5">
                          <h6 className="footer-title">Contact</h6>
                          <ul className="footer-links">
                              <li><a href="mailto:hello@44eleven.com">hello@44eleven.com</a></li>
                              <li><a href="tel:+18005551234">1-800-555-1234</a></li>
                              <li>Mon-Fri: 9am-6pm EST</li>
                              <li>123 Active Street</li>
                              <li>New York, NY 10001</li>
                          </ul>
                      </div>
                  </div>
                  
                  {/* Footer Bottom */}
                  <div className="footer-bottom">
                      <div className="footer-bottom-content">
                          <div className="copyright">
                              &copy; 2024 44:11 Activewear. All rights reserved.
                          </div>
                          
                          <div className="footer-links-bottom">
                              <a href="#">Privacy Policy</a>
                              <a href="#">Terms of Service</a>
                              <a href="#">Cookie Policy</a>
                              <a href="#">Accessibility</a>
                          </div>
                          
                          <div className="payment-methods">
                              <i className="bi bi-credit-card payment-icon"></i>
                              <i className="bi bi-paypal payment-icon"></i>
                              <i className="bi bi-google payment-icon"></i>
                              <i className="bi bi-apple payment-icon"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
          
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
                          <i className="bi bi-bag" style={{"fontSize": "2rem", "color": "#ccc"}}></i>
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