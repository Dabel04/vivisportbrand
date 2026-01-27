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
import React from "react"
import Checkout from './Components/Dynamic Pages/Checkout'
import Signup from "./Components/Dynamic Pages/Signup"
import Success from "./Components/Static Pages/Success"
import Dashboard from "./Components/Admin Page/Dashboard"
import Inventory from "./Components/Admin Page/Inventory"
import Register from "./Components/Dynamic Pages/Register"
import Login from "./Components/Dynamic Pages/Login"

// eslint-disable-next-line react-refresh/only-export-components
export const productAtom = atom([]);

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/shop/:id" element={<ShopDetails />}/>
      <Route path='*' element={<Error />} />
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/> 
      <Route path="/success" element={<Success />}/>
      <Route path="/admin/dashboard" element={<Dashboard />}/>
      <Route path="/admin/inventory" element={<Inventory />}/>
    </Routes>
    </>
  )
}

export default App
