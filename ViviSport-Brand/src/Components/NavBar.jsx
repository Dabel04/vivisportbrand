import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>   
   <Link to='/shop'>
    Shop
   </Link>   
   <Link to='/blog'>
    Blog
   </Link>
   <Link to='/about'>
    About
   </Link>
   <Link to='/faq'>
    Faq
   </Link>
   <Link to='/contact'>
    Contact
   </Link>
    </nav>
  );
};
export default Navbar;