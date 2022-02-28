import Head from 'next/head';
import { useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import { BigNumber, ethers } from 'ethers';
import {
  phnAddress
} from '../config';

import PHN from '../artifacts/contracts/PHN.sol/PlaceHolder.json'

export default function Home() {
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    if (loading == true) {
      connect();
    }
    if (contract != null) {
      loadMyNfts();
    }
  }, [loading]);



  async function loadMyNfts() {
    const tokensOwned = await contract.balanceOf(account);
    const tokenIds = []
    for (let i = 0; i < tokensOwned; i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(account, i)
      tokenIds.push(tokenId.toString())
    }
    setNfts(tokenIds)
  }


  async function connect() {
    if(window.ethereum){
      try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const network = await provider.getNetwork();
        setChainId(network.chainId);
        if (chainId != 3) {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: 'ox' + serialize(3),
              rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
              chainName: "Ropsten Test Network",
              nativeCurrency: {
                name: "ETHER",
                symbol: "ETH",
                decimals: 18
              },
              blockExplorerUrls: ["https://polygonscan.com/"]
            }]
          });
        }
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const phnContract = new ethers.Contract(phnAddress, PHN.abi, signer);
        setContract(phnContract);
        setActive(true);
        setAccount(address);
        setLoading(false);
        // loadMyNfts();

      }
      catch (error) {
        console.log(error);
        setLoading(false);
      }
    }else{
      alert("no metamask wallets found!");
    }
   
  }

  function walletConnect() {

    async function mint() {
      try {
        const performMint = await contract.safeMint();
        await performMint.wait();
        loadMyNfts();
      } catch (e) {
        console.log(e);
      }

    }





    return (
      <div className="col-span-4">
        {!loading ?
          (active ? <button onClick={mint} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">MINT</button> : <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>)
          : <button className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Loading...</button>}
        {/* {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>} */}
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>PlaceHolder NFT</title>
        <meta name="description" content="Generated PlaceHolder NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to PlaceHolder NFT
        </h1>

        {walletConnect()}

        <h2 className="text-2xl font-semibold mb-2">My NFTs</h2>
        <ul className="grid grid-cols-4 gap-6">
          {nfts.map((nft) => <div key={nft} className="bg-gray-100 p-4 h-24 lg:h-28 flex justify-center items-center text-lg"><img src={"http://placehold.jp/3d4070/ffffff/150x150.png?text=" + nft} /></div>)}
        </ul>


        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">MINT</button> */}

      </main>

    </div>
  )
}
