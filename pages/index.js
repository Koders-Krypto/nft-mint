import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";
import { phnAddress } from "../config";

import PHN from "../artifacts/contracts/PHN.sol/PlaceHolder.json";
import Nav from "./Nav";
import Logo from "../public/logo.png";
import { Footer } from "./Footer";

export default function Home() {
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);
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
      setNfts(tokenIds);
    } catch (e) {
      setError(e);
    }
  }

  async function switchNetwork() {
    try {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(3).toString(16)}` }],
      });
      await connect();
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${Number(3).toString(16)}`,
                rpcUrls: [
                  "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                ],
                chainName: "Ropsten Test Network",
                nativeCurrency: {
                  name: "ETHER",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://ropsten.etherscan.io"],
              },
            ],
          });
        } catch (addError) {
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
        if (network.chainId != 3) {
          setWrongNetwork(true);
        } else {
          setWrongNetwork(false);
        }
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const phnContract = new ethers.Contract(phnAddress, PHN.abi, signer);
        setContract(phnContract);
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
        const performMint = await contract.safeMint();
        await performMint.wait();
        loadMyNfts();
      } catch (e) {
        setError(e);
      }
    }

    return (
      <div>
        {!loading ? (
          active ? (
            <button
              onClick={mint}
              className="py-2 mb-4 text-lg font-bold text-white rounded-full w-24 bg-blue-600 hover:bg-blue-800 ml-2">
              MINT
            </button>
          ) : (
            <button
              onClick={connect}
              className="py-2 mb-4 text-lg font-bold text-white rounded-lg w-24 bg-blue-600 hover:bg-blue-800 ml-2">
              Connect
            </button>
          )
        ) : (
          <button className="py-2 mb-4 text-lg font-bold text-white rounded-lg w-24 bg-blue-600 hover:bg-blue-800 ml-2">
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
        <Nav
          callConnect={connect}
          loading={loading}
          active={active}
          address={account}
          switchNetwork={switchNetwork}
          wrongNetwork={wrongNetwork}
        />

        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <div className="flex justify-center items-center">
            <div className="mt-10 mx-10 w-full h-full md:hidden flex justify-center items-center">
              <img
                className="rounded-full w-44 h-44"
                src="https://www.rookiebears.com/img/bear.gif"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-row mt-10 md:mt-0 md:min-h-screen items-center justify-center h-full px-10 md:px-20">
            <div className="flex flex-col items-left justify-left w-full md:w-2/4">
              <h1 className="cursor-pointer text-blue-600 font-extrabold text-3xl md:text-5xl mb-5 uppercase">
                Fantom Bulls
              </h1>
              <p className="text-2xl mb-5">
                The Fantom Bulls contains of <strong>1000</strong> genesis NFT's
              </p>
              <p className="text-2xl mb-5">
                <strong>Launch Date:</strong> 01 AUG 2022
              </p>
              <p className="text-2xl mb-5">
                <strong>Price:</strong> 10 FTM
              </p>
              <div className="flex flex-row items-center justify-left">
                <div className="flex flex-col items-center justify-center bg-blue-600 p-0 h-20 w-20 mr-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">10</div>
                  <div className="text-white text-sm uppercase">Days</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="flex flex-col items-center justify-center bg-blue-600 p-0 h-20 w-20 mr-5 ml-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">5</div>
                  <div className="text-white text-sm uppercase">HRS</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="flex flex-col items-center justify-center bg-blue-600 p-0 h-20 w-20 mr-5 ml-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">30</div>
                  <div className="text-white text-sm uppercase">MIN</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="flex flex-col items-center justify-center bg-blue-600 p-0 h-20 w-20 mr-5 ml-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">28</div>
                  <div className="text-white text-sm uppercase">SEC</div>
                </div>
              </div>
              <div>
                <a href="/Minter">
                  <button className="mt-10 p-2 pr-10 pl-10 bg-trasparent text-3xl rounded-full uppercase font-bold border-2 border-blue-600 text-blue-600">
                    Mint
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-2/4">
              <div className="m-10 w-3/4 hidden md:block">
                <img
                  className="rounded-3xl"
                  src="https://www.rookiebears.com/img/bear.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen bg-white w-full">
          <div className="flex flex-col">
            <div className="flex flex-col mt-8">
              <div className="container max-w-7xl px-4">
                <div className="flex flex-wrap justify-center text-center mb-12">
                  <div className="w-full lg:w-6/12 px-4">
                    <h1 className="text-gray-900 text-4xl font-bold mb-4">
                      Meet the Team
                    </h1>

                    <p className="text-gray-700 text-lg font-light">
                      With our of combined experience, we've got a power of the
                      mightly bull.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Tranter Jaskulski
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Founder & Specialist
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Denice Jagna
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Tired & M. Specialist
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Kenji Milton
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Team Memeber
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Doesn't matter
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Will be fired
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                          <a
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                            <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                            <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full bg-black">
          <div className="text-white py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
              <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                  Roadmap
                </p>
                <p className="text-sm md:text-base text-gray-50 mb-4">
                  Here is the step by step Roadmap for Fantom Bulls Project
                </p>
              </div>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                      className="border-2-2 border-blue-555 absolute h-full border"
                      style={{
                        right: "50%",
                        border: "2px solid #FFC100",
                        bordeRadius: "1%",
                      }}></div>
                    <div
                      className="border-2-2 border-blue-555 absolute h-full border"
                      style={{
                        left: "50%",
                        border: "2px solid #FFC100",
                        borderRadius: "1%",
                      }}></div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-blue-300">Step 1</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Launch
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Collection of 1000 unique genesis NFT Fantom Bulls
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-blue-300">Step 2</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Fantom Bulls DAO
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          The DAO will allow our members to have a voice where
                          they can help us decide which direction the project is
                          headed.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-blue-300">Step 3</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Sandbox Land
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Acquire the land on Sandbox.
                        </p>
                      </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>

                      <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-blue-300">Step 4</p>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                          Fanton Bulls Elite
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Collection of 2000 bulls and join the elite bull
                          community.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="mx-auto -mt-36 md:-mt-36"
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
