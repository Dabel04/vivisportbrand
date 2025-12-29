import { Link } from 'react-router-dom';
import Cart from './Cart'
import { useEffect, useRef, useState } from 'react';
import { useCart } from '../hooks/useCart'

const Navbar = ({setShowCheckOut}) => {
    const [isActive, setIsActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);

    const popupRef = useRef(null);

    function clickOutSide(event) {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setSearchActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutSide);

        return () => {
            document.removeEventListener('mousedown', clickOutSide)
        }
    }, )

    const { cart, getCartCount } = useCart();
    console.log(cart)
    const cartNumber = getCartCount();
    
  return (
    <>
        {/* Navigation */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3">
        <div className="container">
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <span className="navbar-brand"><Link to='/'>44:11</Link></span>
            
            {/* Mobile Icons Container */}
            <div className="mobile-icons-container d-lg-none">
                <div className="nav-icons mobile-version">
                    <i className="bi bi-search" id="mobile-search-toggle" onClick={() => setSearchActive(!searchActive)} ref={popupRef}></i>
                    <Link to='/login'><i className="bi bi-person"></i></Link>
                    <div className="position-relative" onClick={() => setIsActive(!isActive)}>
                        <i className="bi bi-bag cart-icon" id="open-side-cart"></i>
                        <span id="cart-count-mobile" className="cart-count">{cartNumber}</span>
                    </div>
                </div>
            </div>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><Link to='/shop' className='nav-link'>Shop</Link></li>
                    <li className="nav-item"><Link to='/blog' className='nav-link'>Blog</Link></li>
                    <li className="nav-item"><Link to='/about' className='nav-link'>About</Link></li>
                    <li className="nav-item"><Link to='/faq' className='nav-link'>Faq</Link></li>
                    <li className="nav-item"><Link to='/contact' className='nav-link'>Contact</Link></li>
                </ul>
            </div>
            
            {/* Desktop Icons */}
            <div className="nav-icons d-none d-lg-flex align-items-center">
                
                {/* Search Dropdown */}
                <div className="position-relative" onClick={() => setSearchActive(!searchActive)} ref={popupRef}>
                    <i className="bi bi-search" id="desktop-search-toggle"></i>
                    <div className={searchActive ? 'search-dropdown active' : 'search-dropdown'} id="desktop-search-dropdown">
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
                
                <Link to='/login'><i className="bi bi-person"></i></Link>
                
                <div className="position-relative" onClick={() => setIsActive(!isActive)}>
                    <i className="bi bi-bag cart-icon" id="open-side-cart-desktop"></i>
                    <span id="cart-count-desktop" className="cart-count">{cartNumber}</span>
                </div>
            </div>
        </div>
    </nav>
    
    {/* Mobile Search Dropdown */}
    <div className={searchActive ? 'mobile-search-dropdown d-xl-none active' : 'mobile-search-dropdown d-xl-none'} id="mobile-search-dropdown">
        <form className="mobile-search-form" id="mobile-search-form">
            <input type="text" className="mobile-search-input" placeholder="Search products..." id="mobile-search-input"/>
            <button type="submit" className="mobile-search-btn">
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>

    <Cart isActive={isActive} setIsActive={setIsActive} setShowCheckOut={setShowCheckOut}/>
    </>
  );
};
export default Navbar;