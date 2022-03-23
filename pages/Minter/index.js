import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";

import FantomBulls from "../../artifacts/contracts/FantomBulls.sol/FantomBulls.json";
import Nav from "../Nav";
import Logo from "../../public/logo.png";
import { Footer } from "../Footer";


export default function Home() {
  var bullsAddress = '0xD9705b9982d6300bC0BE825305da0c4656DaBf0e';
  const chain_id = 4002;
  const mintPrice = "1";
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [mintAmount, setMintAmount] = useState(10);
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const [error, setError] = useState(null);
  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
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
      const tokenIds = [];
      for (let i = 0; i < tokensOwned; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(account, i);
        tokenIds.push(tokenId.toString());
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

  function walletConnect() {
    async function mint() {
      try {
        console.log(num);
        var amount = String(num * mintPrice);
        console.log(amount);
        const options = { value: ethers.utils.parseEther(amount) }
        const performMint = await contract.mint(num, options);
        await performMint.wait();
        loadMyNfts();
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }

    return (
      <div>
        {!loading ? (
          active ? (
            <button
              onClick={mint}
              className="py-2 mb-4 text-lg font-bold text-white rounded-full w-24 bg-yellow-600 hover:bg-blue-800 ml-2">
              MINT
            </button>
          ) : (
            <button
              onClick={connect}
              className="py-2 mb-4 text-lg font-bold text-white rounded-lg w-24 bg-yellow-600 hover:bg-blue-800 ml-2">
              Connect
            </button>
          )
        ) : (
          <button className="py-2 mb-4 text-lg font-bold text-white rounded-lg w-24 bg-yellow-600 hover:bg-blue-800 ml-2">
            Loading...
          </button>
        )}
        {/* {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>} */}
      </div>
    );
  }

  return (
    <div className="pt-0 min-h-screen bg-slate-200">
      <Head />
      <div className="flex flex-col items-center min-h-screen bg-slate-200">
        <Nav callConnect={connect} loading={loading} active={active} address={account} switchNetwork={switchNetwork} wrongNetwork={wrongNetwork} />
        <div className="grid grid-rows-1 md:grid-flow-col gap-2 mx-2 mt-20">
          <div className="user-list w-full max-w-md mx-auto bg-white rounded-xl shadow-xl flex justify-center items-center flex-col px-8 py-10">
            {" "}
            <div className="flex flex-col items-center justify-cente w-full h-auto px-20 mb-10 rounded-xl">
              <img
                className="rounded-full"
                src="https://fantom-bulls.web.app/fantom-bulls.gif"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl flex flex-col">
                <h1 className="font-extrabold text-2xl mb-1 text-center">
                  1 / 1000
                </h1>
                <h4 className="font-medium text-base text-center">1 Fantom Bull Costs 10 FTM</h4>
                <main className="flex items-center justify-center">
                  <div className="flex flex-row border  rounded-lg border-gray-400 relative border-none mt-5">
                    <button
                      className="font-semibold bg-yellow-600 hover:bg-blue-800 text-white border-gray-400 h-10 w-10 flex rounded-full outline-none focus:outline-none cursor-pointer"
                      onClick={decNum}>
                      <span className="m-auto">-</span>
                    </button>
                    <input
                      type="hidden"
                      className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                      readOnly
                      name="custom-input-number"
                    />
                    <input
                      className="bg-white w-10 h-10 text-xs md:text-base flex items-center justify-center cursor-default text-center outline-none"
                      type="text"
                      value={num}
                      onChange={handleChange}
                      disabled
                    />
                    <button
                      className="font-semibold bg-yellow-600 hover:bg-blue-800 text-white border-gray-400 h-10 w-10 flex rounded-full outline-none focus:outline-none cursor-pointer"
                      onClick={incNum}>
                      <span className="m-auto">+</span>
                    </button>
                    <div className="absolute flex flex-col p-2 w-32 md:w-full mt-6 md:mt-8 items-start justify-center"></div>
                    {walletConnect()}
                  </div>
                  {/* <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">MINT</button> */}
                </main>
              </div>
            </div>
          </div>


          <div>
            {" "}

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
