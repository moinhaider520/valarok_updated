import FAQ from './FAQ';
import {Outlet,Link} from 'react-router-dom';
import React, { useState } from 'react';
function Toggle () {
    const [faqs, setfaqs] = useState([
        {
          question: 'WHAT IS PROJECT VALAROK?',
          answer: 'Valarok is a tale of three different races that will fight for the world. It is an island in the metaverse that will soon emerge from the oceans. It is a series of unique hand-drawn NFT collections made by artists. It is a space where you can create and take part in events. It\'s a community brand you won\'t forget.    ',
          open: true
        },
        {
          question: 'WHAT ARE OUR TEAM\'S GOALS?    ',
          answer: 'Create a community that can leverage the metaverse to have fun, learn, work and share. Create a world for you to fully enjoy. Create unique competitions, contests and events. Create opportunities to expand professions that will increasingly be part of our future. Create a brand that is worldwide recognizable.',
          open: false
        },
        {
          question: 'WHAT NETWORK WILL IT USE?',
          answer: 'The project will be based on ETH\'s blockchain.',
          open: false
        },
        {
          question: 'WHEN WILL THE LAUNCH TAKE PLACE?',
          answer: 'Keep up to date on our socials to find out our launch date as soon as it is announced. If you are interested in purchasing as early bird at a discounted price, enter the whitelist or later in the ruffle.',
          open: false
        },
        {
          question: 'WHAT WILL BE THE PRICE?',
          answer: 'The launch price of the Melian, Sabrian and Rangark collections will be: 0.27 ETH for public sale, 0.19 for whitelist, 0.23 for ruffle.',
          open: false
        },
        {
          question: 'HOW MANY ITEMS WILL THERE BE?',
          answer: 'The Melian collection, just as with Sabrian and Rangark, will feature 7000 unique items of varying rarity.',
          open: false
        },
        {
          question: 'WHEN WILL THE REVEAL HAPPEN?',
          answer: 'The NFT reveal will not have a unique universal date and time, it will happen after the 9th day after the minting. You won\'t have to worry about doing anything, you will automatically receive your NFT in your wallet once the set days have passed.',
          open: false
        },
        {
          question: 'WHY SHOULD I OWN A VALAROK NFT?',
          answer: 'In the "utility" section you will find the reasons why you should join this special and unique community. Many other things will be announced and implemented at due time in order to best walk you inside this reality. Unlike most other NFT collections, it will bring content and benefits to its owners.',
          open: false
        },
        {
          question: 'WHY 3 DIFFERENT RACES?',
          answer: 'Pick your side of the story. Each race has its own ideas, characteristics, role and lands. Fight and live for it by raising your faction to the top. The faction that dominates will enjoy advantages and more opportunities within Valarok Island. Lead your people to victory!',
          open: false
        },
        {
          question: 'WHAT IS COCOA?',
          answer: 'Cocoa will be the token at the heart of Valarok\'s world. It will be used as a trading currency in the metaverse. Over time, you will discover its many functionalities and fundamental value. Production will be exclusive to the MELIAN, SABRIAN and RANGARK collections. All you will need to do is put your NFT in staking in the site\'s portal to earn 3 Cocoa per day for 10 years.',
          open: false
        },
        {
          question: 'WHAT IS ETHARK?',
          answer: 'The ETHARK will be Valarok\'s rare token. Its use will be special and different from COCOA. It can be earned by winning games and contests or by owning METAs or ANCIENTS.',
          open: false
        },
        {
          question: 'WHAT ARE META AND ANCIENTS?',
          answer: 'Meta and Ancients will be two collections obtainable only through certain requirements that we will disclose, they cannot simply be purchased. Only a few will have the privilege of claiming them, many will be the benefits for owners. Will you be able to be a part of it?',
          open: false
        },
        {
          question: 'WHAT ABOUT THE METAVERSE?',
          answer: 'The Valarok Metaverse will be presented in our Roadmap 2.0. An island will be created that is accessible only if you own a Valarok NFT. Claim your avatar and dive into this deep world. Here you will find events, games, work areas, land to buy/sell/lease to make your ideas come true. Are you ready for a new adventure?',
          open: false
        },
        {
          question: 'WHAT ABOUT CHARITY?',
          answer: 'Each of the three collections - Melia, Sabrian, and Rangark - will be corresponding with donations to three different charities: Oceana, Eden Reforestation Projects, WWF.  Donations will be posted on our social channels. Let\'s help our planet for we are also part of it.',
          open: false
        },
        {
          question: '',
          answer: '',
          open: false
        },
        {
          question: '',
          answer: '',
          open: false
        },
        {
          question: '',
          answer: '',
          open: false
        },
        {
          question: '',
          answer: '',
          open: false
        },
        {
          question: '',
          answer: '',
          open: false
        },
        {
          question: '',
          answer: '',
          open: false
        }

      ]);
    
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
	return (
		<div id="faq-back">

        <div>
        <nav id="mint-nav-page">
            <input type="checkbox" id="check" />
               <label for="check" class="checkbtn">
                  <i class="fas fa-bars"></i>
               </label>
      
            <ul id="nav-page">
                  <li><Link to="/" id="nav-a">Home</Link></li>
                  <li><Link to="/mint" id="nav-a">Mint</Link></li>
                  <li><Link to="/Story" id="nav-a">Story</Link></li>
                  <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
                  <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
                  <li><Link to="/toggle" id="nav-a">Faq</Link></li>
		         <Outlet />
            </ul>
            </nav>
          </div>
          <div className="faqs">
        <h1 id="fh1">FAQs</h1>
          <div class="f-underline"></div>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
        </div>
        

        

        
		</div>
    
	)
}

export default Toggle
