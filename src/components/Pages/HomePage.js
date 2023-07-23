import React from 'react'
import Nav from '../navbar/Nav'
import SpaceWalking from '../../Assests/NFT Landing Page/Space Walking.png'
import dog from '../../Assests/NFT Landing Page/dog.png'
import cat from '../../Assests/NFT Landing Page/cat.png'
import bear from '../../Assests/NFT Landing Page/bear.png'
import card1025 from '../../Assests/NFT Landing Page/1025.png'
import mashroom from '../../Assests/NFT Landing Page/mashroom.png'
import mashroom2 from '../../Assests/NFT Landing Page/mashroom 2.png'
import mashroom3 from '../../Assests/NFT Landing Page/mashroom 3.png'
import man from '../../Assests/NFT Landing Page/man.png'
import man2 from '../../Assests/NFT Landing Page/man2.png'
import man3 from '../../Assests/NFT Landing Page/man3.png'
// import Fox from '../../Assests/NFT Landing Page/'
// import mrShroomi from '../../Assests/NFT Landing Page/'
// import mrRobot from '../../Assests/NFT Landing Page/'

import Footer from '../../components/Footer/Footer'
import Keepitreal from '../../Assests/NFT Landing Page/keepitreal.png'
import Digilab from '../../Assests/NFT Landing Page/Digilab.png'
import GravityOne from '../../Assests/NFT Landing Page/GravityOne.png'
import Juanie from '../../Assests/NFT Landing Page/Juanie.png'
import BlueWhale from '../../Assests/NFT Landing Page/BlueWhale.png'
import MrFox from '../../Assests/NFT Landing Page/MrFox.png'
import Shroomie from '../../Assests/NFT Landing Page/Shroomie.png'
import Robotica from '../../Assests/NFT Landing Page/Robotica.png'
import RustyRobot from '../../Assests/NFT Landing Page/RustyRobot.png'
import Animaked from '../../Assests/NFT Landing Page/Animaked.png'
import Dotgu from '../../Assests/NFT Landing Page/Dotgu.png'
import Ghiblier from '../../Assests/NFT Landing Page/Ghiblier.png'
import DistantGalaxy from '../../Assests/NFT Landing Page/DistantGalaxy.png'
import LifeOn from '../../Assests/NFT Landing Page/LifeOn.png'
import Astro from '../../Assests/NFT Landing Page/Astro.png'
import Art from '../../Assests/NFT Landing Page/Art.png'
import Collect from '../../Assests/NFT Landing Page/Collect.png'
import Music from '../../Assests/NFT Landing Page/Music.png'
import Photoghraphy from '../../Assests/NFT Landing Page/Photoghraphy.png'
import Video from '../../Assests/NFT Landing Page/Video.png'
import Utility from '../../Assests/NFT Landing Page/Utility.png'
import Sport from '../../Assests/NFT Landing Page/Sport.png'
import VirtualWorld from '../../Assests/NFT Landing Page/VirtuaWord.png'
import Highlights from '../../Assests/NFT Landing Page/Highlights.png'
import SetupWallet from '../../Assests/NFT Landing Page/SetupWallet.png'
import CreateCollection from '../../Assests/NFT Landing Page/CreateCollection.png'
import Earning from '../../Assests/NFT Landing Page/Earning.png'
import Space from '../../Assests/NFT Landing Page/Space.png'

export default function HomePage() {
  return (
    <>
    <Nav />
    <br />
    <br /><br />
    <div className="container">
        <div className="row">
            <div className="col-6">
                <h1  style={{fontSize:"70px"}}>Discover <br /> Digital Art & Collect NTFs</h1>
                <br />
                <p style={{fontSize:"20px"}} >NTF MarketPlace UI created With Anime For Figma.Collect,Buy And Sell Art from more than 20k NFT Artists.</p> <br />
                <button style={{backgroundColor:'purple',color:'white'}} >Get started</button> <br />
                <br />
                <div className='row'>
                <div className="col"><p>240k + <br /> Total sales</p></div>
                <div className="col"><p>1000k + <br /> Auctions</p></div>
                <div className="col"><p>240k + <br /> Artists</p></div>
                
                
                
                </div>
            </div>
            <div className="col-6">
                <img src={SpaceWalking} alt="" />
            </div>
        </div>
    </div>

     <br />
     <br /><br />

    <div className="container">
        <div className="row">
        <h2>Trending Collections </h2>
        <p>Checkout Our Weekly Updates Trending Collections</p>
        <br /><br /><br /><br />
            <div className="col-4">
                 <img src={dog} alt="" /><br /> <br /><br />
                 <img src={cat} alt="" style={{margin:"5px"}}/>
                 <img src={bear} alt="" style={{margin:"5px"}} />
                 <img src={card1025} alt="" style={{margin:"5px"}} />
                 <h4>SDGN Animals</h4>
                 {/* <img src={Fox} alt="" /> */}
            </div>
            <div className="col-4">
            <img src={mashroom} alt="" /> <br /><br /> <br />
            <img src={mashroom2} alt="" style={{margin:"5px"}} />
            <img src={mashroom3} alt="" style={{margin:"5px"}} />
            <img src={card1025} alt="" style={{margin:"5px"}} />
            <h4>Magic Mashrooms</h4>
            {/* <img src={mrShroomi} alt="" /> */}
            </div>
            <div className="col-4">
            <img src={man} alt="" /><br /> <br /><br />
            <img src={man2} alt="" style={{margin:"5px"}} />
            <img src={man3} alt="" style={{margin:"5px"}}  />
            <img src={card1025} alt="" style={{margin:"5px"}} />
            <h4>Disco Machines</h4>
            {/* <img src={mrRobot} alt="" /> */}
            </div>
        </div>
    </div>


    {/* Top creator section */}
    <br /> <br /><br /><br /><br />
    <div className="container">
        <div className="row">
            <div className="col-8">
                <h1>Top creators</h1>
                <p>Checkout Top Rated  Creators On The NFT MarketPlace</p>
            </div>
            <div className="col-4">
                <button className='btn'>View Ranking</button>
            </div>
        </div>
        <br /><br /><br />
        <div className="row">
            <div className="col-3"><img src={Keepitreal} alt="" /></div>
            <div className="col-3"> <img src={Digilab} alt="" /></div>
            <div className="col-3"> <img src={GravityOne} alt="" /></div>
            <div className="col-3"> <img src={Juanie} alt="" /></div>
        </div>
        <br /><br />
        <div className="row">
            <div className="col-3"><img src={BlueWhale} alt="" /></div>
            <div className="col-3"> <img src={MrFox} alt="" /></div>
            <div className="col-3"> <img src={Shroomie} alt="" /></div>
            <div className="col-3"> <img src={Robotica} alt="" /></div>
        </div>
        <br /><br />
        <div className="row">
            <div className="col-3"><img src={RustyRobot} alt="" /></div>
            <div className="col-3"> <img src={Animaked} alt="" /></div>
            <div className="col-3"> <img src={Dotgu} alt="" /></div>
            <div className="col-3"> <img src={Ghiblier} alt="" /></div>
        </div>
    </div>


     <br /><br /><br /><br /><br />
    <div className="container">
        <div className="row">
            <div className="col-10">
                <h1>Discover More NFTs</h1>
                <p>Explore New Trending NFTs</p>
            </div>
            <div className="col-2">
                <button className='btn'>See All</button>
            </div>
        </div>
        <br /><br /><br />
        <div className="row">
            <div className="col-4">  <img src={DistantGalaxy} alt="" /></div>
            <div className="col-4">  <img src={LifeOn} alt="" /></div>
            <div className="col-4">  <img src={Astro} alt="" /></div>
        </div>
    </div>


    <br /><br /><br /><br /><br />
    <div className="container">
        <div className="row">
            <h1>Browse Categories</h1>
            <br /><br /><br /><br /><br />
            <div className="col-3">   <img src={Art} alt="" style={{width:"220px"}} /></div>
            <div className="col-3">   <img src={Collect} alt="" style={{width:"220px"}} /></div>
            <div className="col-3">   <img src={Music} alt="" style={{width:"220px"}} /></div>
            <div className="col-3">   <img src={Photoghraphy} alt="" style={{width:"220px"}} /></div>
        </div>
        <br /> <br />
        <div className="row">
            <div className="col-3">   <img src={Video} alt="" style={{width:"220px"}} /></div>
            <div className="col-3">   <img src={Utility} alt="" style={{width:"220px"}} /></div>
            <div className="col-3">   <img src={Sport} alt="" style={{width:"220px"}} /></div>
            <div className="col-3">   <img src={VirtualWorld} alt="" style={{width:"220px"}} /></div>            
        </div>
    </div>


    <br /><br /><br /><br />
    <div className="containerfluid">
        <div className="row">
            <div className="col-12">
                <img src={Highlights} alt="" style={{width:"100%"}} />
            </div>
        </div>
    </div>


    <br /> <br /><br /><br />
    <div className="container">
        <div className="row">
            <h1>How It Works</h1>
            <p>Find Out How To Get Started</p>
            <br /><br /><br />
            <div className="col-4"> <img src={SetupWallet} alt="" /> </div>
            <div className="col-4">  <img src={CreateCollection} alt="" /></div>
            <div className="col-4">  <img src={Earning} alt="" /></div>
        </div>
    </div>


    <br /><br /><br /><br />    
    <div className="container">
        <div className="row">
            <div className="col-6"><img src={Space} alt="" style={{paddingLeft:"90px"}} /></div>
            <div className="col-6">
                <h1>Join Our Weekly <br /> Digest</h1>
                <p>Get Exclusive Promotions & Updates <br /> Straight To Your Inbox</p>
                <button className='btn' >Subscribe</button>
            </div>
        </div>
    </div>






    < Footer />
    </>
  )
}
