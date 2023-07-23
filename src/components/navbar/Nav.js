import React from 'react'
import navpic from '../../Assests/NFT Landing Page/nav/Navfirst pic.png'
import './Nav.css'
export default function Nav() {
  return (
    <div className="containerfluid a">
    <div className="row">
      <div className="col-6">
        <img src={navpic} alt=" " />
      </div>
      <div className="col-6 h">
        <nav> 
        MarketPlace
        Ranking
        ConnectWallet 
        <button className="btn"> Sign up</button>
        </nav>
      </div>
    </div>
  </div>
  )
}
