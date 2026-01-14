import React, {
    // useEffect, 
    
    useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../styles/style.css'
import {ass, bras, bottoms, anotherhero} from '../images'
import products from '../../Data/products'
import {useAtom} from 'jotai'
import { productAtom } from '../../App'
import Footer from '../Static Pages/Footer'
import Header from './Header'

function LandingPage() {
    // eslint-disable-next-line no-unused-vars
    const [product, setProduct] = useAtom(productAtom);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedColors, setSelectedColors] = useState({});
    // const [userData, setUserData] = useState([]);

//       useEffect(() => {
//     // Define an asynchronous function inside useEffect
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/products");

//         if (!response.ok) {
//           throw new Error(`${response.status}`)
//         } 
//         console.log(response)

//         const data = await response.json(); // Await the second promise
//         console.log(data)
//         setUserData(data);
//         console.log(userData)
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     // Call the async function immediately
//     fetchData();
//   }, []);
    
    const colors = [
      { name: 'White', value: '#fff', border: '1px solid #ccc' },
      { name: 'Black', value: '#000' },
      { name: 'Pink', value: '#e91e63' },
      { name: 'Blue', value: '#2196f3' }
    ];
    
    function handleSizeSelect(productId, size) {
      setSelectedSizes(prev => ({
        ...prev,
        [productId]: size
      }));
    }
    
    function handleColorSelect(productId, color) {
      setSelectedColors(prev => ({
        ...prev,
        [productId]: color
      }));
    }
    
    function updateCart(item, quantitys) {
      const qty = Number(quantitys) || 1;
      const size = selectedSizes[item.id] || 'M';
      const color = selectedColors[item.id] || colors[2]; // Default color
      
      setProduct(prev => {
        const existing = prev.find(p => 
          p.id === item.id && 
          p.size === size && 
          p.color.value === color.value
        )
        if (existing) {
          return prev.map(p => 
            p.id === item.id && 
            p.size === size && 
            p.color.value === color.value
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
          size: size,
          color: color
        }]
      })
    }

  return (
    <>
        <Header />
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
                  <Link to='/shop'>
                  <span  className="view-all-link" style={{fontSize: '0.8rem'}}>
                    VIEW ALL
                </span>
                </Link>
              </div>
              <div className="row">
                  {/* Products looped */}           
                     {
                        products.slice(0, 16).map((product) => (
                    <div className="col-6 col-lg-3" key={product.id}>
                         <div className="product-card">
                            <Link to={`/shop/${product.id}`}>
                            <div className="product-img-wrapper">
                                <span className="badge badge-custom badge-popular">Popular</span>
                                <img src={product.images} alt={product.name} />
                            </div>
                            </Link>
                            <div className="product-title">{product.name}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="mt-2">
                                {colors.map((color, idx) => (
                                  <span 
                                    key={idx}
                                    className={`color-swatch ${selectedColors[product.id]?.value === color.value ? 'selected' : ''}`}
                                    style={{
                                      background: color.value, 
                                      border: color.border || 'none',
                                      cursor: 'pointer'
                                    }}
                                    onClick={() => handleColorSelect(product.id, color)}
                                  ></span>
                                ))}
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
                          <img src={anotherhero} className="feature-img" alt="FlexFit" />
                      </div>
                      <div className="col-md-6 bg-light">
                          <div className="feature-content">
                              <span className="feature-label">Perfect Stretch, Perfect Fit</span>
                              <h2 className="feature-title">Discover FlexFit Freedom</h2>
                              <p className="mb-4 text-muted">Introducing FlexFit: our breakthrough activewear material. It effortlessly adapts to your form for a tailor-made fit without the squeeze. Move with ease and style in every stride.</p>
                              <Link to='/shop'>
                              <button className="btn btn-black shop-now">
                                Shop Now
                              </button>
                              </Link>
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
        <Footer />
    </>
  )
}

export default LandingPage
