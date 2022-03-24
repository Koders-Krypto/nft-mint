import React from "react";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";

import FantomBulls from "../../artifacts/contracts/FantomBulls.sol/FantomBulls.json";
import Nav from "../Nav";
import { Footer } from "../Footer";

function Bulls() {
  var bullsAddress = '0x19AA74C9074d35d2d9F93D9abf8972bCB2FBfCbF';
  const chain_id = 4002;
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [mintAmount, setMintAmount] = useState(10);
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading == true) {
      connect();
    }
    if (contract != null) {
      loadMyNfts();
    }
  }, [loading]);

  async function loadMyNfts() {
    try {
      const tokensOwned = await contract.balanceOf(account);
      const baseUrl = await contract;
      const tokenIds = [];
      for (let i = 0; i < tokensOwned; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(account, i);
        let tokenJson = {
          tokenId: tokenId.toString(),
          tokenURI: await contract.tokenURI(tokenId.toString())
        }
        tokenIds.push(tokenJson);
      }
      console.log(tokenIds);
      setNfts(tokenIds);
    } catch (e) {
      setError(e);
    }

  }

  async function switchNetwork() {
    try {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(chain_id).toString(16)}` }],
      });
      await connect();
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: `0x${Number(chain_id).toString(16)}`,
              rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
              chainName: "Ropsten Test Network",
              nativeCurrency: {
                name: "ETHER",
                symbol: "ETH",
                decimals: 18
              },
              blockExplorerUrls: ["https://ropsten.etherscan.io"]
            }]
          });
        }
        catch (addError) {
          setError(addError);
        }
      } else {
        setError(switchError);
      }
    }

  }

  async function connect() {
    if (window.ethereum) {
      try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const network = await provider.getNetwork();
        setChainId(network.chainId);
        if (network.chainId != chain_id) {
          setWrongNetwork(true);
        } else {
          setWrongNetwork(false);
        }
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const bullContract = new ethers.Contract(bullsAddress, FantomBulls.abi, signer);
        setContract(bullContract);
        setActive(true);
        setAccount(address);
        setLoading(false);
        // loadMyNfts();
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    } else {
      setError("no metamask wallets found!");
    }
  }

  return (
    <div className="pt-0 min-h-screen bg-slate-200">
      <div className="min-h-screen">
        <Nav callConnect={connect} loading={loading} active={active} address={account} switchNetwork={switchNetwork} wrongNetwork={wrongNetwork} display={true}/>
        <div className="px-6 py-20">
          <section>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
              {
                nfts.map((nft, index) => (
                  <div className="relative h-full w-full" key={index}>
                    <img
                      className="rounded-lg"
                      src={nft.tokenURI}
                      alt=""
                    />
                    <h2 className="font-body text-center text-xl font-bold pt-2">
                      Fantom Bulls #{nft.tokenId}
                    </h2>
                    {/* <button className="absolute top-2 right-2 z-5 bg-yellow-600 p-2 rounded-full h-12 w-12"> */}
                    <a target="_blank"  download={`${nft.tokenId}.png`} href={nft.tokenURI} title={`Fantom Bulls #${nft.tokenId}`}>
                      <button className="absolute top-2 right-2 z-5 bg-yellow-600 p-2 rounded-full h-12 w-12"><i className="fa-solid fa-download text-white"></i></button>
                      </a>
                    {/* </button> */}
                  </div>
                ))
              }
              {/* <div className="relative h-full w-full">
                <img
                  className="rounded-lg"
                  src="https://fantom-bulls.web.app/1.png"
                  alt=""
                />
                <h2 className="font-body text-center text-xl font-bold pt-2">
                  Fantom Bulls #100
                </h2>
                <button className="absolute top-2 right-2 z-5 bg-yellow-600 p-2 rounded-full h-12 w-12">
                  <i className="fa-solid fa-download text-white"></i>
                </button>
              </div> */}

            </div>
          </section>
        </div>
      </div>

      <div className="pb-5">
        <Footer />
      </div>
    </div>
  );
}

export default Bulls;
