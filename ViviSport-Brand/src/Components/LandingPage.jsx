import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/style.css'
import {ass, bras, bottoms} from './images'
import products from '../Data/products'
import {useAtom} from 'jotai'
import { productAtom } from '../App'

function LandingPage() {
    const [product, setProduct] = useAtom(productAtom);
    const [selectedSizes, setSelectedSizes] = useState({});
    
    function handleSizeSelect(productId, size) {
      setSelectedSizes(prev => ({
        ...prev,
        [productId]: size
      }));
    }
    
    function updateCart(item, quantitys) {
      const qty = Number(quantitys) || 1
      const size = selectedSizes[item.id] || 'M'; // Default to M if no size selected
      
      setProduct(prev => {
        const existing = prev.find(p => p.id === item.id && p.size === size)
        if (existing) {
          return prev.map(p => 
            p.id === item.id && p.size === size 
              ? { ...p, quantity: p.quantity + qty } 
              : p
          )
        }
        return [...prev, { 
          id: item.id, 
          name: item.name, 
          price: item.price, 
          image: item.image, 
          quantity: qty,
          size: size
        }]
      })
    }

    console.log(product)
      
      

  return (
    <>
        <>
        <div>
          <div className="top-bar text-center">
              Free Delivery on orders above $100
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
                  {/* Products looped */}           
                     {
                        products.map((product) => (
                    <div className="col-6 col-lg-3" key={product.id}>
                         <div className="product-card">
                            <div className="product-img-wrapper">
                                <span className="badge badge-custom badge-popular">Popular</span>
                                <img src={product.images} alt="Bra" />
                            </div>
                            <div className="product-title">{product.name}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="mt-2">
                                <span className="color-swatch selected" style={{background: "#fff", border: "1px solid #ccc"}}></span>
                                <span className="color-swatch" style={{background: "#000"}}></span>
                            </div>
                            <div className="mt-1">
                                {['XS', 'S', 'M', 'L'].map(size => (
                                  <button 
                                    key={size}
                                    className={`size-selector ${selectedSizes[product.id] === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(product.id, size)}
                                  >
                                    {size}
                                  </button>
                                ))}
                            </div>
                            <button className="add-to-cart-btn" onClick={() => updateCart(product)}>Add to Cart</button>
                         </div>
                    </div>
                        ))
                     }
                   
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