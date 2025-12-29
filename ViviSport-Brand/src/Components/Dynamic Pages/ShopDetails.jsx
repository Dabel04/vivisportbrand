import React, { useState } from 'react'
import '../../styles/ShopDetails.css'
import { useParams } from 'react-router-dom'
import products from '../../Data/products.json'
import { useCart } from '../../hooks/useCart'
import Footer from '../Static Pages/Footer'
import Header from './Header'



function ShopDetails() {
    const { id } = useParams();
    const numericId = parseInt(id)

    const product = products.find(p => p.id == numericId)
    
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('XS');
    const [selectedColor, setSelectedColor] = useState({name: 'Black', value: '#000000'});
    const [quantity, setQuantity] = useState(1);

    const colors = [
        {name: 'Black', value: '#000000'},
        {name: 'Charcoal', value: '#555555'},
        {name: 'Sand', value: '#D2B48C'},
        {name: 'Navy', value: '#02182b'}
    ];

    if (!product) {
        return <h1>404 NOT FOUND, There is no Product {numericId} in the cart</h1>
        
    }

    function handleAddToCart() {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images || product.image,
            size: selectedSize,
            color: selectedColor,
            quantity: quantity
    };
    addToCart(cartItem);
    }

    function handleQuantityChange(value) {
        const newQty = Math.max(1, Math.min(10, quantity + value));
        setQuantity(newQty);
    }
    
  return (
    <>
    <Header />
          {/* Top Promo Bar */}
    <div className="top-bar text-center">
        Free Delivery on orders above $100
    </div>
    
    {/* Product Detail Section */}
    <section className="container">
        <div className="row g-5">
            {/* Product Images */}
            <div className="col-lg-6">
                <div className="product-gallery">
                    <img src="https://images.unsplash.com/photo-1506619216599-9d939743f39d?q=80&w=2070&auto=format&fit=crop" 
                         alt="High-Waist Training Leggings" 
                         className="main-image" 
                         id="main-image"
                         data-bs-toggle="modal" 
                         data-bs-target="#imageModal"/>
                    
                    <div className="thumbnail-container">
                        <img src="https://images.unsplash.com/photo-1506619216599-9d939743f39d?q=80&w=2070&auto=format&fit=crop" 
                             alt="Front View" 
                             className="thumbnail active"
                             data-image="https://images.unsplash.com/photo-1506619216599-9d939743f39d?q=80&w=2070&auto=format&fit=crop"/>
                        
                        <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
                             alt="Side View" 
                             className="thumbnail"
                             data-image="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"/>
                        
                        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                             alt="Back View" 
                             className="thumbnail"
                             data-image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"/>
                        
                        <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                             alt="Detail View" 
                             className="thumbnail"
                             data-image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop"/>
                    </div>
                </div>
            </div>
            
            {/* Product Information */}
            <div className="col-lg-6">
                <h1 className="productDetails-title">{product.name}</h1>
                
                <div className="product-price">
                    <span className="old-price">${product.originalPrice}</span>
                    ${product.price}
                </div>
                
                <div className="product-rating">
                    <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                    </div>
                    <span className="review-count">(128 reviews)</span>
                </div>
                
                <p className="product-description">
                    {product.description}
                </p>
                
                {/* Color Selector */}
                <div className="color-selector">
                    <div className="color-label">Color: <span id="selected-color-name">{selectedColor.name}</span></div>
                    <div className="color-options">
                        {colors.map(color => (
                            <div className="color-option-container" key={color.name}>
                                <div className={`color-option ${selectedColor.name === color.name ? 'selected' : ''}`}
                                     style={{backgroundColor: color.value}} 
                                     onClick={() => setSelectedColor(color)}
                                     data-color={color.name}></div>
                                <div className="color-name">{color.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Size Selector */}
                <div className="size-selector">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="size-label">Size: <span id="selected-size">{selectedSize}</span></div>
                        <a href="#" className="size-guide" data-bs-toggle="modal" data-bs-target="#sizeGuideModal">
                            <i className="bi bi-rulers"></i> Size Guide
                        </a>
                    </div>
                    <div className="size-options">
                        <div className={`size-option ${selectedSize === 'XS' ? 'selected' : ''}`} onClick={() => setSelectedSize('XS')}>XS</div>
                        <div className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => setSelectedSize('S')}>S</div>
                        <div className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => setSelectedSize('M')}>M</div>
                        <div className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => setSelectedSize('L')}>L</div>
                        <div className="size-option unavailable">XL</div>
                    </div>
                </div>
                
                {/* Quantity Selector */}
                <div className="quantity-selector">
                    <div className="quantity-label" style={{fontWeight: "600", color: "var(--primary-navy)"}}>Quantity:</div>
                    <div className="quantity-control">
                        <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
                        <input type="number" className="quantity-input" value={quantity} 
                               onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))} 
                               min="1" max="10"/>
                        <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <div className="stock-status" style={{color: 'var(--accent-green)', fontWeight: "600"}}>
                        <i className="bi bi-check-circle"></i> In Stock
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="action-buttons">
                    <button className="btn-add-to-cart" onClick={handleAddToCart}>
                        <i className="bi bi-bag-plus"></i> Add to Cart
                    </button>
                    <button className="btn-wishlist" id="wishlist-btn">
                        <i className="bi bi-heart"></i> Wishlist
                    </button>
                </div>
                
                {/* Additional Info */}
                <div className="additional-info" style={{color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)'}}>
                    <p><i className="bi bi-truck" style={{color: "black"}}></i> Free shipping on orders over $100</p>
                    <p><i className="bi bi-arrow-left-right" style={{color: "black"}}></i> Free returns within 30 days</p>
                    <p><i className="bi bi-shield-check" style={{color: "black"}}></i> 1-year warranty on all products</p>
                </div>
            </div>
        </div>
    </section>
    
    {/* Product Details Tabs */}
    <section className="container product-tabs">
        <ul className="nav nav-tabs" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab">
                    Description
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab">
                    Details & Care
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab">
                    Reviews (128)
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="shipping-tab" data-bs-toggle="tab" data-bs-target="#shipping" type="button" role="tab">
                    Shipping & Returns
                </button>
            </li>
        </ul>
        
        <div className="tab-content" id="productTabContent">
            {/* Description Tab */}
            <div className="tab-pane fade show active" id="description" role="tabpanel">
                <h4 className="mb-4" style={{color: "var(--primary-navy)"}}>Premium {product.name}</h4>
                <p>{product.fullDescription}</p>
                
                <h5 className="mt-4" style={{color: "var(--primary-navy)"}}>Key Features:</h5>
                <ul>
                    <li><strong>FlexFit Technology:</strong> Four-way stretch fabric that moves with your body</li>
                    <li><strong>Moisture-Wicking:</strong> Quick-dry material keeps you comfortable</li>
                    <li><strong>Compression Support:</strong> Strategic compression zones for muscle support</li>
                    <li><strong>Sweat-Resistant:</strong> Special coating prevents sweat marks</li>
                    <li><strong>No-Slip Waistband:</strong> Stays in place during all movements</li>
                    <li><strong>Hidden Pocket:</strong> Secure pocket for keys or cards</li>
                </ul>
                
                <h5 className="mt-4" style={{color: "var(--primary-navy)"}}>Perfect For:</h5>
                <p>Yoga, Pilates, running, weight training, HIIT workouts, dance, and everyday wear.</p>
            </div>
            
            {/* Details & Care Tab */}
            <div className="tab-pane fade" id="details" role="tabpanel">
                <h4 className="mb-4" style={{color: "var(--primary-navy)"}}>Product Details</h4>
                <ul className="details-list">
                    <li><strong>Material:</strong> 85% Nylon, 15% Spandex</li>
                    <li><strong>Fabric:</strong> Performance compression knit</li>
                    <li><strong>Weight:</strong> Medium compression</li>
                    <li><strong>Waist:</strong> High-rise, wide band</li>
                    <li><strong>Length:</strong> Full length (28" inseam)</li>
                    <li><strong>Closure:</strong> Pull-on with elastic waist</li>
                    <li><strong>Opacity:</strong> Opaque (non-see-through)</li>
                    <li><strong>Origin:</strong> Designed in USA</li>
                </ul>
                
                <h4 className="mt-5 mb-4" style={{color: "var(--primary-navy)"}}>Care Instructions</h4>
                <ul>
                    <li>Machine wash cold with similar colors</li>
                    <li>Use mild detergent</li>
                    <li>Do not use fabric softener</li>
                    <li>Hang dry or tumble dry low</li>
                    <li>Do not iron</li>
                    <li>Do not bleach</li>
                </ul>
            </div>
            
            {/* Reviews Tab */}
            <div className="tab-pane fade" id="reviews" role="tabpanel">
                <h4 className="mb-4" style={{color: "var(--primary-navy)"}}>Customer Reviews</h4>
                
                {/* Review Summary */}
                <div className="row mb-5">
                    <div className="col-md-4 text-center">
                        <div className="display-4 fw-bold" style={{color: "var(--primary-red)"}}>4.5</div>
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                        <p className="text-muted">Based on 128 reviews</p>
                    </div>
                </div>
                
                {/* Individual Reviews */}
                <div className="review">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                        </div>
                        <small className="text-muted">2 days ago</small>
                    </div>
                    <h6 style={{color: "var(--primary-navy)"}}>Perfect for intense workouts!</h6>
                    <p className="mb-2">"These leggings stay in place during my HIIT sessions. The compression is just right - supportive but not restrictive. Love the hidden pocket too!"</p>
                    <p className="text-muted"><strong>Sarah M.</strong> · Verified Purchase</p>
                    <hr/>
                </div>
                
                <div className="review">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star"></i>
                        </div>
                        <small className="text-muted">1 week ago</small>
                    </div>
                    <h6 style={{color: "var(--primary-navy)"}}>Great quality, true to size</h6>
                    <p className="mb-2">"I ordered my usual size and they fit perfectly. The material is thick enough to be squat-proof. Only wish they had more colors!"</p>
                    <p className="text-muted"><strong>Jessica L.</strong> · Verified Purchase</p>
                    <hr/>
                </div>
                
                <button className="btn btn-outline-primary mt-3" style={{borderColor: 'var(--primary-red)', color: 'var(--primary-red)'}}>
                    <i className="bi bi-chat-left-text"></i> Write a Review
                </button>
            </div>
            
            {/* Shipping & Returns Tab */}
            <div className="tab-pane fade" id="shipping" role="tabpanel">
                <h4 className="mb-4" style={{color: "var(--primary-navy)"}}>Shipping Information</h4>
                <ul>
                    <li><strong>Standard Shipping:</strong> 3-5 business days · $4.99</li>
                    <li><strong>Express Shipping:</strong> 1-2 business days · $9.99</li>
                    <li><strong>Free Shipping:</strong> On all orders over $100</li>
                    <li><strong>International Shipping:</strong> Available to select countries</li>
                </ul>
                
                <h4 className="mt-5 mb-4" style={{color: "var(--primary-navy)"}}>Return Policy</h4>
                <p>We offer a 30-day return policy on all unworn items with original tags attached. Returns are free for US customers.</p>
                
                <h5>How to Return:</h5>
                <ol>
                    <li>Initiate return through your account page</li>
                    <li>Print the prepaid return label</li>
                    <li>Package items securely</li>
                    <li>Drop off at any USPS location</li>
                    <li>Refund processed within 5-7 business days</li>
                </ol>
            </div>
        </div>
    </section>
    
    {/* Related Products */}
    <section className="container related-products">
        <h2 className="section-title">You Might Also Like</h2>
        <div className="row">
            <div className="col-md-3 col-6">
                <div className="related-card">
                    <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                         alt="Ribbed Performance Set" 
                         className="related-img"/>
                    <h5 className="related-title">Ribbed Performance Set</h5>
                    <div className="related-price">$58.00</div>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="related-card">
                    <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
                         alt="High-Rise Athletic Tights" 
                         className="related-img"/>
                    <h5 className="related-title">High-Rise Athletic Tights</h5>
                    <div className="related-price">$61.00</div>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="related-card">
                    <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop" 
                         alt="Full-Support Sports Bra" 
                         className="related-img"/>
                    <h5 className="related-title">Full-Support Sports Bra</h5>
                    <div className="related-price">$42.00</div>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="related-card">
                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                         alt="Training Tank Top" 
                         className="related-img"/>
                    <h5 className="related-title">Training Tank Top</h5>
                    <div className="related-price">$38.00</div>
                </div>
            </div>
        </div>
    </section>   
    
    {/* Image Modal */}
    <div className="modal fade image-modal" id="imageModal">
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
                <div className="modal-body">
                    <img src="https://images.unsplash.com/photo-1506619216599-9d939743f39d?q=80&w=2070&auto=format&fit=crop" 
                         alt="High-Waist Training Leggings" 
                         className="zoomed-image"/>
                </div>
            </div>
        </div>
    </div>
    
    {/* Size Guide Modal */}
    <div className="modal fade" id="sizeGuideModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor: 'var(--primary-navy)', color: "white"}}>
                    <h5 className="modal-title">Size Guide</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <h6 className="mb-3" style={{color: "var(--primary-navy)"}}>Women's Leggings Size Chart</h6>
                    <table className="table table-striped">
                        <thead style={{backgroundColor: "var(--bg-light)"}}>
                            <tr>
                                <th>Size</th>
                                <th>Waist (in)</th>
                                <th>Hips (in)</th>
                                <th>Inseam (in)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XS</td>
                                <td>24-26</td>
                                <td>34-36</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>27-29</td>
                                <td>37-39</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>30-32</td>
                                <td>40-42</td>
                                <td>28</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>33-35</td>
                                <td>43-45</td>
                                <td>28</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-muted mt-3"><small>All measurements in inches. For best fit, measure your waist at the narrowest point and hips at the fullest point.</small></p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ShopDetails