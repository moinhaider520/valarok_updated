import React from "react";
import {Outlet,Link} from 'react-router-dom';
function Terms(){
    return(
        <div className="termsandconditions">
            <nav id="homenav">
          <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>

          <ul>
            <li><Link to="/" id="nav-a">Home</Link></li>
            <li><Link to="mint" id="nav-a">Mint</Link></li>
            <li><Link to="Story" id="nav-a">Story</Link></li>
            <li><Link to="Utilities" id="nav-a">Utilities</Link></li>
            <li><Link to="Roadmap" id="nav-a">Roadmap</Link></li>
            <li><Link to="terms" id="nav-a">Faq</Link></li>
                <Outlet />
          </ul>
            </nav>
            <div className="terms-content">
                <h1>TERMS AND CONDITIONS</h1>
                <p>"Valarok is a collection of digital artworks (non-fungible tokens or “NFTs”) running on the Ethereum network. This website is only an interface that allows users to exchange digital collectables. Users are solely responsible for the security and management of their own private Ethereum wallets and for validating all transactions and Smart Contracts generated by this website before approval. Furthermore, given that the Valarok Smart Contract runs on the Ethereum network, you acknowledge and agree that there is no ability to undo, reverse, or restore any transactions.</p>
                <p>Owner may modify these terms without prior notice to you. Your use of the site constitutes your full legal acceptance of the Terms.</p>
                <p>YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE, SALE, AND TRADE OF VALAROK NFTS IS AT YOUR SOLE RISK, AND THAT THIS WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, OWNER, ITS SUBSIDIARIES, AFFILIATES, AND LICENSORS MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES).</p>
                <p>VALAROK NFTS ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE ETHEREUM NETWORK. ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR ON THE DECENTRALIZED LEDGER WITHIN THE ETHEREUM PLATFORM. OWNER HAS NO CONTROL OVER AND MAKES NO GUARANTEES OR PROMISES WITH RESPECT TO SMART CONTRACTS. BY USING THIS WEBSITE, YOU AGREE TO THESE TERMS AND CONDITIONS AND ARE ACCEPTING SOLE RESPONSIBILITY FOR ANY AND ALL TRANSACTIONS INVOLVING VALAROK COLLECTIBLES.</p>
                <ol>
                    <li>Ownership. Each individual Valarok NFT is on the Ethereum blockchain. When you purchase an Valarok NFT (the “NFT”), you own the underlying NFT completely and have the right to trade, sell, or give away your Valarok NFT. Ownership of the NFT is dictated entirely by the Smart Contract and the Ethereum Network. Owner has no ability to seize, freeze, or otherwise modify the ownership of any Valarok NFT.</li>
                    <li>License to display and use Art.</li>
                    <br />
                    <p>(a)Personal Use. Subject to your continued compliance with these Terms, Owner grants you a worldwide, royalty-free license to use, copy, and display the Art (as defined below), along with any Accepted Uses (as defined below) that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the sale and purchase of your Valarok NFT, provided that the marketplace cryptographically verifies each Valarok owner’s rights to the NFT; or (iii) as part of a third-party website or application that permits the inclusion, involvement, or participation of your Valarok NFT, provided that the website/application cryptographically verifies each Valarok owner’s rights to the NFT. The Art is the digital artwork embodied in the NFT. Accepted Uses are reproductions of the Art displayed in other mediums, such as on clothing or printed paper.</p>
                    <p>(b) Commercial Use. Subject to your continued compliance with these Terms, Owner grants you a worldwide, royalty-free license to use, copy, and display the Art for the purpose of creating Accepted Uses for commercial purposes (“Commercial Use”). Examples of Accepted Uses include T-shirts or key chains displaying the Art. For clarity, nothing in this Section will be deemed to restrict you from (2.1) owning or operating a marketplace that permits the use and sale of Valarok NFTs generally, provided that the marketplace cryptographically verifies each Valarok NFT owner’s rights to the NFT; (2.2) owning or operating a third-party website or application that permits the inclusion, involvement, or participation of Valarok NFTs generally, provided that the third-party website or application cryptographically verifies each Valarok NFT owner’s rights to the NFT; or (2.3) earning revenue from any of the foregoing.</p>
                    <p>(c) Other Limits On License. The license granted in this section applies only to the extent that you continue to own the Valarok NFT. If at any time you sell, trade, donate, give away, transfer, or otherwise dispose of your Valarok NFT for any reason, the license granted to you in this section will immediately expire without the requirement of notice, and you will have no further rights in or to the display or use of the Art for that Valarok NFT.</p>
                    <li>Restrictions. You agree that you may not, nor permit any third party to use or attempt to use, the Art for or in connection with any illegal purpose.</li>
                    <p>Owner Intellectual Property. Other than the rights described herein, nothing in these Terms gives you any rights or licenses in or to any trademarks, copyrights, or other intellectual property rights belonging to Owner, including, without limitation, to the trademarks Valarok, any associated logos and slogans, and Owner’s copyright in and to the Art (collectively, “Owner Intellectual Property”). Owner reserves all rights that are not expressly granted to you in these Terms.</p>
                </ol>
                <h1>Value; Volatility; Not an Investment</h1>
                <p>Nothing in this website shall be deemed to constitute a prospectus of any sort or a solicitation for investment, nor does it in any way pertain to an offering or a solicitation of an offer to buy any securities in any jurisdiction. This website does not constitute an investment, legal, tax, regulatory, financial, accounting or other advice, and this website is not intended to provide the sole basis for any evaluation of a transaction on acquiring or selling of NFTs. Prior to acquiring the NFTs, a prospective purchaser should consult with his/her own legal, investment, tax, accounting, and other advisors to determine the potential benefits, burdens, and other consequences of such transaction. NFTs are not a digital currency, security, commodity, or any other kind of financial instrument and have not been registered under the Securities Act of 1933, as amended, the securities laws of any State of the United States of America or the securities laws of any other country, including the securities laws of any jurisdiction in which a potential NFT holder is a resident.</p>
                <p>Certain statements, estimates and financial information if made by Owner or otherwise contained in this website are for informational purposes only, and may constitute forward-looking statements or information. Such forward-looking statements or information involve known and unknown risks and uncertainties which may cause actual events or results to differ materially from the estimates or the results implied or expressed in such forward-looking statements or information. The prices of NFTs are extremely volatile and subjective and NFTs have no inherent or intrinsic value. Fluctuations in the price of other digital assets could materially and adversely affect the value of your NFTs, which may also be subject to significant price volatility. We cannot guarantee that any NFTs purchased will retain their original value, as the value of collectibles is inherently subjective and factors occurring outside of the Owner’s ecosystem may materially impact the value and desirability of any particular NFT. The regulatory regime governing blockchain technologies, cryptocurrencies and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the Owner’s ecosystem, and therefore the potential utility or value of your NFTs. You accept and acknowledge all of the aforementioned inherent risks, price and value volatility, and further accept and acknowledge that Owner will not be responsible, in whole or in part, for any of the associated risks of engaging in any transactions relating to your NFTs.</p>
                
            </div>
        </div>
    )
}
export default Terms;