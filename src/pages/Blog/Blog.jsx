import React from 'react'
import './Blog.css'
import img from '../../assets/logo.png'
import Menu from '../../components/Menu/Menu'

const Blog = () => {
  return (
    <div className='blog'>
      <Menu/>
      <h1>Blog</h1>
      <p>In this project i learned about use context, use APIs, and react google charts is new for me and i so happy with this project.
        <br /> I practice more about usestate and useeffect with APIs, in this case i use gekko api for this project, show all crypto coins and change the currency in real time.
        <br /> I also use react google charts to show the market cap of the crypto coins, and use react router dom to navigate between pages.
        <br />
        Thaks for look this project i really appreciate, so i have a lot of things to learn in the future and i continue this path for web developer
        <br />
        You can check coinGecko API in the next link: <a href="https://www.coingecko.com">CoinGecko</a>
      </p>
      <img src={img} alt="" />
    </div>
  )
}

export default Blog