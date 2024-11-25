import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

const Pricing = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className='home'>
      <Menu/>
      <div className="hero">
        <h1>Top 20 crypto coins <br /></h1>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className='center'>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          displayCoin.slice(0,20).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red" }>

                {item.price_change_percentage_24h.toFixed(2) + "%"}</p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Pricing  