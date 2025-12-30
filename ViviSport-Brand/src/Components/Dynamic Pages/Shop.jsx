import React, { useEffect, useState } from 'react';
import '../../styles/shop.css';
// import products from '../Data/products.json'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'
import Footer from '../Static Pages/Footer';
import Header from './Header';

function Shop() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

    useEffect(() => {
        // Load products
        fetch('/src/Data/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // Get unique categories and their counts
    const getCategoryCounts = () => {
        const counts = products.reduce((acc, product) => {
            const category = product.category;
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});
        return counts;
    };

    const categoryCounts = getCategoryCounts();
    const totalProducts = products.length;

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);


  function handleSizeSelect(productId, size) {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
  }

  function updateCart(item) {
    const size = selectedSizes[item.id] || 'S';
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: size,
      color: {name: 'Black', value: '#000000'} // default color
    };
    addToCart(cartItem);
  }
  return (
    <>
      <Header />
      <main className="container-xl py-5">
          <h1 className="display-5 fw-bold text-center mb-5">All Products</h1>

          <div className="row">
              <div className="col-lg-3 d-none d-lg-block">
                  <aside id="filter-sidebar" className="shop-filter-sidebar">
                      <div className="d-flex justify-content-between align-items-center mb-3 d-lg-none">
                          <h5 className="filter-header mb-0">Filters</h5>
                          <button className="btn-close" id="close-filter-mobile"></button>
                      </div>
          <div className="list-group category-list">
                      <span 
                          className={`list-group-item ${selectedCategory === 'All' ? 'active' : ''}`}
                          onClick={() => {
                            setSelectedCategory('All');
                            setCurrentPage(1);
                          }}
                          style={{ cursor: 'pointer' }}
                      >
                          All Activewear ({totalProducts})
                      </span>
                      {Object.entries(categoryCounts).map(([category, count]) => (
                          <span 
                              key={category}
                              className={`list-group-item ${selectedCategory === category ? 'active' : ''}`}
                              onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                              }}
                              style={{ cursor: 'pointer' }}
                          >
                              {category} ({count})
                          </span>
                      ))}
                  </div>
                      <button className="btn btn-outline-secondary w-100 mt-3">Clear All Filters</button>
                  </aside>
                  <div id="filter-overlay" className="filter-overlay"></div>
              </div>

              <div className="col-lg-9">
                  <div className="shop-grid-header d-flex justify-content-between align-items-center">
                      <p className="mb-0 text-secondary">Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} results</p>
                      <div className="d-flex align-items-center">
                          <button className="btn btn-outline-dark mobile-filter-btn d-lg-none me-3" id="open-filter-mobile"><i className="bi bi-funnel"></i> Filter</button>
                          <div className="dropdown sort-dropdown me-3">
                              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">Sort By: Bestselling</button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                  <li><span className="dropdown-item" href="#">Price: Low to High</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>


                  <div className="row g-3 g-md-4 shop-grid">
                          {  
                            currentItems.map(product => (
                              <div className="col-6 col-md-4 shop-container" key={product.id}>
                              <div className="product-card-shop">
                              <Link to={`/shop/${product.id}`}>
                                  <div className="card-image-wrapper">
                                      <img src={product.images} alt="Legging"/>
                                  </div>
                              <div>    
                                  <h3 className="card-title-custom">{product.name}</h3>
                                  <p className="card-subtitle-custom">{product.category}</p>
                                  <p className="card-price">${product.price}</p>
                              </div>
                              </Link>
                              <div className="card-body-custom">
                                  
                                  <div className="mb-2">
                                      <span 
                                        className={`size-option-shop ${selectedSizes[product.id] === 'S' || !selectedSizes[product.id] ? 'selected' : ''}`}
                                        onClick={() => handleSizeSelect(product.id, 'S')}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        S
                                      </span>
                                      <span 
                                        className={`size-option-shop ${selectedSizes[product.id] === 'M' ? 'selected' : ''}`}
                                        onClick={() => handleSizeSelect(product.id, 'M')}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        M
                                      </span>
                                      <span 
                                        className={`size-option-shop ${selectedSizes[product.id] === 'L' ? 'selected' : ''}`}
                                        onClick={() => handleSizeSelect(product.id, 'L')}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        L
                                      </span>
                                  </div>
                                  <button className="btn-shop-to-cart" onClick={() => updateCart(product)}>Quick Add</button>
                              </div>
                          </div>
                           </div>
                            ))
                          }
                  </div>           
                  <div className="d-flex justify-content-center mt-5">
                      <ul className="pagination">
                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <span className="page-link" href="#" onClick={() => setCurrentPage(currentPage - 1)}>Previous</span>
                          </li>
                          {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <span className="page-link" href="#" onClick={() => setCurrentPage(index + 1)}>{index + 1}</span>
                            </li>
                          ))}
                          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <span className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>Next</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </main>

      <Footer />
    </>
  )
}

export default Shop
