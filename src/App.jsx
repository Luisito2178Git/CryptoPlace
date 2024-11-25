import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Blog from './pages/Blog/Blog'
import Pricing from './pages/Pricing/Pricing'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App