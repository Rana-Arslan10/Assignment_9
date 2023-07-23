import React from 'react'
import Nav from '../../Assests/NFT Landing Page/nav/Navfirst pic.png'
import discord from '../../Assests/NFT Landing Page/DiscordLogo.png'
import youtube from '../../Assests/NFT Landing Page/YoutubeLogo.png'
import twitter from '../../Assests/NFT Landing Page/TwitterLogo.png'
import insta from '../../Assests/NFT Landing Page/InstagramLogo.png'

export default function Footer() {
  return (
    <div>
    <br /><br /><br />
    <div className="container" style={{paddingLeft:"150px",paddingRight:"150px"}}>
        <div className="row">
            <div className="col-4">
                <img src={Nav} alt="" />
                <p>NFT MarketPlace UI created <br /> With Anime For Figma. <br /><br /> Join our community</p><br />
                <img src={discord} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
            </div>
            <div className="col-3">
                <h3>Explore</h3>
                <p>MarketPlace  <br /><br /> Ranking <br /> <br />
                Connect a Wallet </p>
            </div>
            <div className="col-5">
                <h3>Join Our Weekly Digest </h3><br />
                <p>Get exclusive promotions & updates <br /> straight to your inbox.</p>
                <button className='btn'>Subscribe</button>
            </div>
            <hr />
            <p>NFT Market.Use this template freely.</p>
        </div>
    </div>
    </div>
  )
}
