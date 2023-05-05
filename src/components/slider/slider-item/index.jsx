import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import './styles.scss'
import { useAccount, useConnect, useContractReads, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { useContractRead } from 'wagmi'
import { BigNumber } from 'ethers'

SliderItem.propTypes = {
    item : PropTypes.object,
};

function SliderItem(props) {
    const {item} = props;  
	  const [text, setText] = useState(false)

    const [isOpen2, setOpen2] = useState(false)

	const { address:ethAddress, isConnecting, isDisconnected } = useAccount()
	
	
	const { data:data3, isLoading:isLoading3 } = useContractRead({
		address: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
		abi: erc20,    
		args: [ethAddress,'0x1ecbBE76E57a56D0C7Cf15E33E0eeB777e9eBDD2'],
		watch: true,
		functionName: 'allowance',
	  })

	  const { data:data2, isLoading:isLoading2, isSuccess:isSuccess2, write:write2 } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: '0x1ecbBE76E57a56D0C7Cf15E33E0eeB777e9eBDD2',
		abi: collection,
		args: [ethAddress,1,0],
		functionName: 'mint',
		overrides: {
			from: ethAddress,
			value: "1500000000000000000000",
		  },
	  })



	  const { config, error } = usePrepareContractWrite({
		address: '0xe990eAA4D078f3F3018F692A5880423cF9536f92',
		abi: erc20,
		args: ["0x1ecbBE76E57a56D0C7Cf15E33E0eeB777e9eBDD2","1500000000000000000000"] ,
		functionName: 'approve',
		  onSuccess(data) {	

			console.log('Success approve', data)
		  },
		  onError(data){
			
			setText(false)
		}
	
	  })
    const [isOpen, setOpen] = useState(false)
      const { data, isLoading, isSuccess, write } = useContractWrite(config)

    const joinCloseHandler = () => {
        setOpen2(false)
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
    
    const mintOne =async () => {
		console.log(parseFloat(data3))
		setText(false)

			await  write2?.()

    };
      const mintModalHandler = () => {
        setOpen2(true);
    };
    // const [modalShow, setModalShow] = useState(false);
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect() 
    return (
        <div   className={`box-slider ${item.classAction}`}>
            <img className='bg-slider' src={item.bgImg} alt="Dapper" />
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-box">
                                <h1 className="title">{item.title}</h1>
                                <p className="sub-title">{item.desc}</p>
                                <div className="wrap-btn">
                                    {/* {isConnected===true?<Link  onClick={()=> handleShow()}  to="#" className="tf-button-st2 btn-effect" data-toggle="modal" data-target="#popup_bid"><span className="effect">Mint NFT</span></Link>
:                                    <span className="effect"><Link onClick={() => connect()} to="#" className="tf-button-st2 btn-effect" data-toggle="modal" data-target="#popup_bid">connect wallet</Link></span>
} */}
<div className="separator"/>
<Link onClick={()=> setOpen(true)} to="#" className="tf-button-st2 btn-effect" data-toggle="modal" data-target="#popup_bid">
									watch video
										</Link>
                                    
                                </div>
								
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-3">
                            <div className="image">
                                <img src={item.img} alt="Dapper" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
         

            { <Modal
                show={show}
                onHide={handleClose}
            >
            <Modal.Header  closeButton></Modal.Header>

                <div className="modal-body center">
                                   
                                        <h6 className="heading" ><a href="#">COLLECT YOUR NFT</a> </h6>
                                        <p className="content">Mint your unique Dapper Dog NFT for just 1500 FLR and join our pawsome community. Once minted, stake it immediately to start earning Cootie Cash rewards!</p>


								    <Link  disabled={!write} onClick={() =>mintOne()} to="#" className="tf-button-st2 btn-effect" data-toggle="modal"  data-target="#popup_bid"><span className="effect">Create New NFT</span></Link> 

 </div>
            </Modal>}

            { <div className="modal fade popup" id="popup_bid" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="header-popup">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    
                </div>
            </div>
        </div> }
        </div>
    );
}

export default SliderItem;

const erc20=[
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
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "Snapshot",
		"type": "event"
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
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
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
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
				"internalType": "uint256",
				"name": "snapshotId",
				"type": "uint256"
			}
		],
		"name": "balanceOfAt",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
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
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "snapshot",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"internalType": "uint256",
				"name": "snapshotId",
				"type": "uint256"
			}
		],
		"name": "totalSupplyAt",
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
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
	}
]
const collection = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"string","name":"initialBaseURI","internalType":"string"}]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"addCurrency","inputs":[{"type":"address","name":"_payToken","internalType":"contract IERC20"},{"type":"uint256","name":"_costValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"payToken","internalType":"contract IERC20"},{"type":"uint256","name":"costValue","internalType":"uint256"}],"name":"allowedCrypto","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseExtension","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"baseURI","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"tokenIds","internalType":"uint256[]"}],"name":"getTokensOfOwner","inputs":[{"type":"address","name":"_owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isPresaleActive","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxMintAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxSupply","inputs":[]},{"type":"function","stateMutability":"payable","outputs":[],"name":"mint","inputs":[{"type":"address","name":"_to","internalType":"address"},{"type":"uint256","name":"_mintAmount","internalType":"uint256"},{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"pause","inputs":[{"type":"bool","name":"_state","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"paused","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBaseExtension","inputs":[{"type":"string","name":"_newBaseExtension","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setBaseURI","inputs":[{"type":"string","name":"_newBaseURI","internalType":"string"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMaxMintAmount","inputs":[{"type":"uint256","name":"_newMaxMintAmount","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMaxSupply","inputs":[{"type":"uint256","name":"_newMaxSupply","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setPresaleState","inputs":[{"type":"bool","name":"_state","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transfer","inputs":[{"type":"address","name":"_from","internalType":"address"},{"type":"address","name":"_to","internalType":"address"},{"type":"uint256","name":"_tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateMintPrice","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_newCostValue","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"walletOfOwner","inputs":[{"type":"address","name":"_owner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]}]