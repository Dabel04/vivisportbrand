import Header from "./Components/Dynamic Pages/Header"
import Footer from "./Components/Static Pages/Footer"
import LandingPage from "./Components/Dynamic Pages/LandingPage"
import About from "./Components/Static Pages/About"
import Blog from "./Components/Static Pages/Blog"
import Faq from "./Components/Static Pages/Faq"
import Contact from "./Components/Static Pages/Contact"
import Shop from "./Components/Dynamic Pages/Shop"
import {Routes, Route} from 'react-router-dom' 
import Error from "./Components/Static Pages/Error"
import {atom} from 'jotai'
import ShopDetails from './Components/Dynamic Pages/ShopDetails'
import React,{ useState } from "react"
import Checkout from './Components/Dynamic Pages/Checkout'
import Login from "./Components/Dynamic Pages/Login"
import Success from "./Components/Static Pages/Success"

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
      <Route path="/login" element={<Login />}/>
      <Route path="/success" element={<Success />}/>
    </Routes>
    {!showCheckOut && <Footer />}
    
    {/*  Conditional Rendering of the checkout  */}

    </>
  )
}

export default App
