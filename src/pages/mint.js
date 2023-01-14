import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {Outlet,Link} from 'react-router-dom';
import Web3 from 'web3';
import Clock from "./Clock";



const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_mintAmount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseExtension",
				"type": "string"
			}
		],
		"name": "setBaseExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newmaxMintAmount",
				"type": "uint256"
			}
		],
		"name": "setmaxMintAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseExtension",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMintAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "walletOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const VAULTABI = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "claimForAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Melian",
				"name": "_nft",
				"type": "address"
			},
			{
				"internalType": "contract Cocoa",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Claimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "NFTStaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "NFTUnstaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "earningInfo",
		"outputs": [
			{
				"internalType": "uint256[1]",
				"name": "info",
				"type": "uint256[1]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "tokensOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "ownerTokens",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "vault",
		"outputs": [
			{
				"internalType": "uint24",
				"name": "tokenId",
				"type": "uint24"
			},
			{
				"internalType": "uint48",
				"name": "timestamp",
				"type": "uint48"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


var account = null;
var contract = null;
var vaultcontract = null;

const NFTCONTRACT = "0xF485235b19B477a0F550dc3c6e48B67CDC90f7D5";
const STAKINGCONTRACT = "0x4ebc86742fA067AbFe649B7A1D12C02a20a78543";

async function connectwallet() { 
  if (window.ethereum) { 
  var web3 = new Web3(window.ethereum); 
  await window.ethereum.send('eth_requestAccounts'); 
  var accounts = await web3.eth.getAccounts(); 
  account = accounts[0]; 
  contract = new web3.eth.Contract(ABI, NFTCONTRACT);
  vaultcontract = new web3.eth.Contract(VAULTABI, STAKINGCONTRACT);
  }
}
async function mint() {
  if (window.ethereum) { 
    var _mintAmount = Number(document.querySelector("[name=amount]").value); 
    var mintRate = Number(await contract.methods.cost().call()); 
    var totalAmount = mintRate * _mintAmount; 
  	contract.methods.mint(account, _mintAmount).send({ from: account, value: String(totalAmount) }); 
  }
}

async function stakeit() {
	var tokenids = Number(document.querySelector("[name=stkid]").value);
	vaultcontract.methods.stake([tokenids]).send({from: account});
}

async function claimit() {
	var tokenids = Number(document.querySelector("[name=claimid]").value);
	vaultcontract.methods.claim([tokenids]).send({from: account});
}

const id = "here";



class Mint extends React.Component{
	
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);
		this.state = {
          width: window.innerWidth,
          counter:0,
		  show: null
        };
		
		
        
      };
	  
	  handleClose() {
		this.setState({show: id});
	  }
	
	  handleShow(id) {
		this.setState({show: id});
	  }
	  handleModal(){  
		this.setState({show:!this.state.show})  
	  };
	  handlePopup(){  
		this.setState({show:!this.state.show})  
	  };
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      };
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      };
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

      increment() {
		if(this.state.counter < 4){
		this.setState({
		  counter: this.state.counter + 1
		});
	}
	  }
    decrement() {
		this.setState(prevState => 
			({counter: prevState.counter? prevState.counter-1: 0})
		)
  }
    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
		
        
        
      
        if (isMobile) {
          return (
            <div>
              <nav id="mint-nav-page">
            <input type="checkbox" id="check" />
               <label htmlFor="check" className="checkbtn">
                  <i className="fas fa-bars"></i>
               </label>
      
            <ul id="nav-page">
                  <li><Link to="/" id="nav-a">Home</Link></li>
                  <li><Link to="/mint" id="nav-a">Mint</Link></li>
                  <li><Link to="/Story" id="nav-a">Story</Link></li>
                  <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
                  <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
                  <li><Link to="/toggle" id="nav-a">Faq</Link></li>
		         <Outlet />
				 <button onClick={connectwallet} id="connect-button">Connect Wallet</button>
            </ul>
            </nav>
              
                <AwesomeSlider style={{ "--slider-height-percentage": "180%", "--slider-transition-duration": "200ms" }}
                                    fillParent={false}
                >
                  <div className="slide">
				  <img id="melian-mobile" src="assets/images/test.png" alt="rangark-mobile" />
                  <div className="arrow-left"></div>
				  <div className="arrow-right"></div>
				  <div id="engine_mobile">
                  {/* <button onClick={connectwallet} id="connect-button_mobile">Connect Wallet</button> */}
                        {/* <button onClick={mint} id="mint-button_mobile">MINT</button><br /> */}
                        
                            <div className="count-container_mobile">
                            <input name="amount" value={this.state.counter} id="count_mobile"  />
                            <button onClick={this.increment.bind(this)} id="counter-inc_mobile" className="counter-inc">+</button>
                            <button onClick={this.decrement.bind(this)} id="counter-dec_mobile" className="counter-dec">-</button>
                            </div>
							<br />
							<button onClick={mint} id="mint-button_mobile">MINT</button><br />
							{/* <div className="modalClass">  
          					<button onClick={() => this.handleShow('here')} id="mint-button_mobile">STAKE</button><br />
		  					<button onClick={() => this.handleShow('there')} id="mint-button_mobile">CLAIM</button>  
        					</div>   */}
          
        				{/* <Modal show={this.state.show === 'here'} onHide={this.handleClose}>  
          				<Modal.Header >Stake Your Minted NFT</Modal.Header>  
          				<Modal.Body>
			  			<label>Enter Your NFT ID: </label>
			  			<input type="number" name="stkid" style={{marginLeft: "5px"}}/>
			  			<Button onClick={stakeit} style={{marginLeft: "20px"}} >Stake</Button>
		  				</Modal.Body>  
          				<Modal.Footer>  
            			<Button onClick={()=>this.handleModal()}>Close</Button> 
          				</Modal.Footer>  
        				</Modal> */}

						{/* <Modal show={this.state.show === 'there'} onHide={this.handleClose}>  
          				<Modal.Header >Claim Your COCOA Token</Modal.Header>  
          				<Modal.Body>
			  			<label>Enter Your Staked NFT ID: </label>
			  			<input type="number" name="claimid" style={{marginLeft: "5px"}}/>
			  			<Button onClick={claimit} style={{marginLeft: "20px"}} >Claim</Button>
		  				</Modal.Body>  
          				<Modal.Footer>  
            			<Button onClick={()=>this.handleModal()}>Close</Button> 
          				</Modal.Footer>  
        				</Modal> */}
					</div>
					<p id="melian-mob-text" >The Melians are a mutant race, born from exposure to the Ethark. Most of them live far from humans, but some of them camouflage themselves among us, overseeing our actions. Their concern is for knowledge and the preservation of our planet. They are rational, persevering, superb and analytical. The few encounters they had with humans occurred with ancient civilizations, to whom they left precious knowledge. However, when they saw the nature of man their trust was shattered, so they decided to step aside and live hidden among humans.</p>
                  </div>
                  <div className="slide2">
				  <div className="arrow-left"></div>
				  <div className="arrow-right"></div>
					<img id="rangark-mobile" src="assets/images/rangark-on3.png" alt="rangark-mobile" />
                  </div>
                  <div className="slide3">
				  <div className="arrow-left"></div>
				  <div className="arrow-right"></div>
				  <img src="assets/images/sabrian-on3.png"  alt="sabrian-mobile"/>
                  </div>
                </AwesomeSlider>
                
            </div>
          );
        } else {
          return (
            <div>
              <nav id="mint-nav-page">
            	<input type="checkbox" id="check" />
               <label htmlFor="check" className="checkbtn">
                  <i className="fas fa-bars"></i>
               </label>
      
            <ul id="nav-page-mint">
                  <li><Link to="/" id="nav-a">Home</Link></li>
                  <li><Link to="/mint" id="nav-a">Mint</Link></li>
                  <li><Link to="/Story" id="nav-a">Story</Link></li>
                  <li><Link to="/Utilities" id="nav-a">Utilities</Link></li>
                  <li><Link to="/Roadmap" id="nav-a">Roadmap</Link></li>
                  <li><Link to="/toggle" id="nav-a">Faq</Link></li>
		         <Outlet />
				 <button onClick={connectwallet} id="connect-button">Connect Wallet</button>
            </ul>
			
            </nav>

            <div className="mint">
                
				<div className="sabrian">
                    {/* <h1>SABRIAN</h1>
                    <h2>coming soon</h2>
					<img src="assets/images/sabrian.png" alt="sabrian" width={100} class="race-logo" />
					<h2>DESCRIPTION SABRIAN</h2>
					<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3> */}
            	</div>
                
				<div className="melian">
					<p id="mtext">The Melians are a mutant race, born from exposure to the Ethark. Most of them live far from humans, but some of them camouflage themselves among us, overseeing our actions. Their concern is for knowledge and the preservation of our planet. They are rational, persevering, superb and analytical. The few encounters they had with humans occurred with ancient civilizations, to whom they left precious knowledge. However, when they saw the nature of man their trust was shattered, so they decided to step aside and live hidden among humans.</p>
                    <div id="engine">
					
                    
                        
							<div className="clock"><Clock /></div>
                            <div className="count-container">
							
                            <input name="amount" value={this.state.counter} id="count"  />
                            <button onClick={this.increment.bind(this)} className="counter-inc">+</button>
                            <button onClick={this.decrement.bind(this)} className="counter-dec">-</button>
                            </div>

							<button onClick={mint} id="mint-button">MINT</button>
							{/* <div className="modalClass">  
          					<button onClick={() => this.handleShow('here')} id="mint-button">STAKE</button>
		  					<button onClick={() => this.handleShow('there')} id="mint-button">CLAIM</button>  
        					</div>   */}
          
        				{/* <Modal show={this.state.show === 'here'} onHide={this.handleClose}>  
          				<Modal.Header>Stake Your Minted NFT</Modal.Header>  
          				<Modal.Body>
			  				<label>Enter Your NFT ID: </label>
			  				<input type="number" name="stkid" style={{marginLeft: "5px"}}/>
			  				<Button onClick={stakeit} style={{marginLeft: "20px"}} >Stake</Button>
		  				</Modal.Body>  
          				<Modal.Footer>  
            			<Button onClick={()=>this.handleModal()}>Close</Button> 
          				</Modal.Footer>  
        				</Modal>

						<Modal show={this.state.show === 'there'} onHide={this.handleClose}>  
          				<Modal.Header>Claim Your COCOA Token</Modal.Header>  
          				<Modal.Body>
			  				<label>Enter Your Staked NFT ID: </label>
			  				<input type="number" name="claimid" style={{marginLeft: "5px"}}/>
			  				<Button onClick={claimit} style={{marginLeft: "20px"}} >Claim</Button>
		  				</Modal.Body>  
         				<Modal.Footer>  
            			<Button onClick={()=>this.handleModal()}>Close</Button> 
          				</Modal.Footer>  
        				</Modal> */}
                    </div>
                </div>
                
				<div className="rangark">
                    {/* <h1>RANGARK</h1>
                    <h2>coming soon</h2>
					<img src="assets/images/rangark.png" alt="rangark" width={100} class="race-logo"/>
					<h2>DESCRIPTION RANGARK</h2>
					<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3> */}
                </div>
				
            </div>
            </div>
            
          );

        }}}
    
export default Mint;