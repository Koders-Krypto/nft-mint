import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import FantomBulls from "../../artifacts/contracts/FantomBulls.sol/FantomBulls.json";
import Nav from "../Nav";
import Footer from "../Footer";

export default function Mint() {
  var bullsAddress = "0xf2b4e66411905d08Cf708526fc76a399cb4Dc7F2";
  const chain_id = 250;
  const mintPrice = "10";
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [mintAmount, setMintAmount] = useState(10);
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const [error, setError] = useState(null);
  const [totalMinted, setTotalMinted] = useState(0);
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("Error");
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
  }, [loading]);


  async function switchNetwork() {
    try {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(chain_id).toString(16)}` }],
      });
      await connect();
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${Number(chain_id).toString(16)}`,
                rpcUrls: ["https://rpc.ftm.tools/"],
                chainName: "Fantom Opera",
                nativeCurrency: {
                  name: "Fantom",
                  symbol: "FTM",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://ftmscan.com/"],
              },
            ],
          });
        } catch (addError) {
          setError(addError.message);
        }
      } else {
        setError(switchError.message);
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
        const bullContract = new ethers.Contract(
          bullsAddress,
          FantomBulls.abi,
          signer
        );
        setContract(bullContract);
        setActive(true);
        setAccount(address);
        setLoading(false);
        // loadMyNfts();
        const tokenCount = await bullContract.totalSupply();
        // await tokenCount.wait();
        setTotalMinted(ethers.utils.formatUnits(tokenCount, 0));
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log(error);
      }
    } else {
      setError("no metamask wallets found!");
      console.log("error");
    }
  }

  function walletConnect() {
    async function mint() {
      try {
        console.log(num);
        var amount = String(num * mintPrice);
        const options = { value: ethers.utils.parseEther(amount) };
        const performMint = await contract.mint(num, options);
        await performMint.wait();
        setPopupType("Success");
        setError("Minted " + num + " tokens!");
        setPopup(true);
        // loadMyNfts();
      } catch (e) {
        setPopupType("Error");
        setError(e.data.message);
        setPopup(true);
        console.log(e);
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
  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <img src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/loading.gif?alt=media&token=9a07dc74-a280-4a81-ab34-616524563c2f" alt="" />
      </div>
    )
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
          display={true}
        />

        <div className="h-[90vh]">
          <div className="grid grid-rows-1 md:grid-flow-col gap-2 mx-2 mt-20">
            <div className="user-list w-full max-w-md mx-auto bg-white rounded-xl shadow-xl flex justify-center items-center flex-col px-8 py-10">
              {" "}
              <div className="flex flex-col items-center justify-cente w-full h-auto px-20 mb-10 rounded-xl">
                <img
                  className="rounded-full"
                  src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/fantom-bulls.gif?alt=media&token=e8ef3cca-6e67-4a07-b8f6-7b28cdd79d7e"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl flex flex-col">
                  <h1 className="font-extrabold text-2xl mb-1 text-center">
                    {totalMinted} / 1000
                  </h1>
                  <h4 className="font-medium text-base text-center">
                    1 Fantom Bull Costs 10 FTM
                  </h4>
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
          </div>
        </div>
        <Footer />
      </div>
      {/* Popup */}
      {(popup) ?
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {(popupType === "Error") ?
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    :
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  }
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title">
                      {(popupType === "Error") ? popupType.message : popupType }
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {error}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setPopup(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> : 
      <div></div>}
    </div>
  );
}
