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
import {atom} from 'jotai'
import ShopDetails from './Components/ShopDetails'
import React,{ useState } from "react"
import Checkout from './Components/Checkout'
import Success from "./Components/Success"

// eslint-disable-next-line react-refresh/only-export-components
export const productAtom = atom([]);

function App() {
  const [showCheckOut, setShowCheckOut] = useState(false)

  return (
    <>
    {!showCheckOut && <Header setShowCheckOut={setShowCheckOut}/>}
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/shop/:id" element={<ShopDetails />}/>
      <Route path='*' element={<Error />} />
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/success" element={<Success />}/>
    </Routes>
    {!showCheckOut && <Footer />}
    
    {/*  Conditional Rendering of the checkout  */}

    </>
  )
}

export default App
