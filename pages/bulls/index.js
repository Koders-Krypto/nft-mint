import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import FantomBulls from "../../artifacts/contracts/FantomBulls.sol/FantomBulls.json";
import Nav from "../Nav";
import Footer from "../Footer";

function Bulls() {
  var bullsAddress = "0xf2b4e66411905d08Cf708526fc76a399cb4Dc7F2";
  const chain_id = 250;
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [mintAmount, setMintAmount] = useState(10);
  const [wrongNetwork, setWrongNetwork] = useState(false);
  const [error, setError] = useState(null);
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("Error");

  useEffect(() => {
    if (loading == true) {
      connect();
    }
    if (contract != null) {
      loadMyNfts();
    }
  }, [loading]);

  async function loadMyNfts() {
    if (account != null && account != ""){
      try {
        const tokensOwned = await contract.balanceOf(account);
        // const baseUrl = await contract;
        const tokenIds = [];
        for (let i = 0; i < tokensOwned; i++) {
          const tokenId = await contract.tokenOfOwnerByIndex(account, i);
          let tokenJson = {
            tokenId: tokenId.toString(),
            tokenURI: await contract.tokenURI(tokenId.toString()),
          };
          tokenIds.push(tokenJson);
        }
        tokenIds.sort(function (a, b) {
          return parseInt(a.tokenId) - parseInt(b.tokenId);
        });
        setNfts(tokenIds);
      } catch (e) {
        setError(e.message);
        setPopupType("Error");
        setPopup(true);
        // setLoading(false);
      }
    }
  }

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
          setError(addError);
        }
      } else {
        setError(switchError);
        setError(e.message);
        setPopupType("Error");
        setPopup(true);
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
        loadMyNfts();
      } catch (error) {
        setLoading(false);
        setError(e.message);
        setPopupType("Error");
        setPopup(true);
      }
    } else {
      setError("no metamask wallets found!");
      setPopupType("Error");
      setPopup(true);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/loading.gif?alt=media&token=9a07dc74-a280-4a81-ab34-616524563c2f"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="pt-0 min-h-screen bg-slate-200">
      <div className="min-h-screen">
        <Nav
          callConnect={connect}
          loading={loading}
          active={active}
          address={account}
          switchNetwork={switchNetwork}
          wrongNetwork={wrongNetwork}
          display={true}
        />
        <div className="px-6 py-20">
          <section>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
              {nfts.map((nft, index) => (
                <div className="relative h-full w-full" key={index}>
                  <img className="rounded-lg" src={nft.tokenURI} alt="" />
                  <h2 className="font-body text-center text-xl font-bold pt-2">
                    Fantom Bulls #{nft.tokenId}
                  </h2>
                  {/* <button className="absolute top-2 right-2 z-5 bg-yellow-600 p-2 rounded-full h-12 w-12"> */}
                  <a
                    target="_blank"
                    href={nft.tokenURI}
                    title={`Fantom Bulls #${nft.tokenId}`}
                    download>
                    <button className="absolute top-2 right-2 z-5 bg-yellow-600 p-2 rounded-full h-12 w-12">
                      <i className="fa-solid fa-download text-white"></i>
                    </button>
                  </a>
                  {/* </button> */}
                </div>
              ))}
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
                              {(popupType === "Error") ? popupType.message : popupType}
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
