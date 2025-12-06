import Header from "./Components/Header"
import Footer from "./Components/Footer"
import LandingPage from "./Components/LandingPage"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Faq from "./Components/Faq"
import Contact from "./Components/Contact"
import Shop from "./Components/Shop"
import {Routes, Route} from 'react-router-dom' 
import Error from "./Components/Error"


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
