import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
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
                          <li><Link to='/contact'>Contact Us</Link></li>
                          <li><Link to='/faq'>FAQ</Link></li>
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
                          <li><Link to='/about'>About Us</Link></li>
                          <li><Link to='/blog'>Blog</Link></li>
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
    </>
  )
}

export default Footer