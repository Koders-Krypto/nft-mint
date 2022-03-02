import Head from "next/head";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";
import { phnAddress } from "../config";

import PHN from "../artifacts/contracts/PHN.sol/PlaceHolder.json";
import Nav from "./Nav";
import Logo from "../public/logo.png";

console.log(Logo.src);

export default function Home() {
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);
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
    const tokensOwned = await contract.balanceOf(account);
    const tokenIds = [];
    for (let i = 0; i < tokensOwned; i++) {
      const tokenId = await contract.tokenOfOwnerByIndex(account, i);
      tokenIds.push(tokenId.toString());
    }
    setNfts(tokenIds);
  }

  async function connect() {
    if (window.ethereum) {
      try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const network = await provider.getNetwork();
        setChainId(network.chainId);
        // if (chainId != 3) {
        //   window.ethereum.request({
        //     method: "wallet_addEthereumChain",
        //     params: [{
        //       chainId: 'ox' + serialize(3),
        //       rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
        //       chainName: "Ropsten Test Network",
        //       nativeCurrency: {
        //         name: "ETHER",
        //         symbol: "ETH",
        //         decimals: 18
        //       },
        //       blockExplorerUrls: ["https://polygonscan.com/"]
        //     }]
        //   });
        // }
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const phnContract = new ethers.Contract(phnAddress, PHN.abi, signer);
        setContract(phnContract);
        setActive(true);
        setAccount(address);
        setLoading(false);
        // loadMyNfts();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
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
              Connect to MetaMask
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
    <>
      <div className="flex flex-col items-center justify-center p-16 min-h-screen bg-slate-200">
        <Head>
          <Nav />
        </Head>

        <div className="flex flex-col items-center justify-center">
          <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4 p-16">
            <div className="flex flex-col items-center justify-cente w-30 h-30 mb-10">
              <img
                className="rounded-full"
                src={Logo.src}
                alt="logo"
                height="150"
                width="150"
              />
            </div>
            <main className="flex items-center justify-center">
              <div className="flex flex-row border h-10 w-56 rounded-lg border-gray-400 relative border-none mt-1">
                <button
                  className="font-semibold bg-blue-600 hover:bg-blue-800 text-white border-gray-400 h-10 w-10 flex rounded-full outline-none focus:outline-none cursor-pointer"
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
                  className="bg-white w-10 text-xs md:text-base flex items-center justify-center cursor-default text-center outline-none"
                  type="text"
                  value={num}
                  onChange={handleChange}
                  disabled
                />
                <button
                  className="font-semibold bg-blue-600 hover:bg-blue-800 text-white border-gray-400 h-10 w-10 flex rounded-full outline-none focus:outline-none cursor-pointer"
                  onClick={incNum}>
                  <span className="m-auto">+</span>
                </button>
                <div className="absolute flex flex-col p-2 w-32 md:w-full mt-6 md:mt-8 items-start justify-center"></div>
                {walletConnect()}
              </div>

              {/* <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">MINT</button> */}
            </main>
            <div class="py-0">
              <div>
                <ul className="flex flex-row items-center justify-center divide-x mt-4 mb-4">
                  <li className="pl-4 pr-4">
                    <p class="text-base leading-6 dark:text-gray-600 text-gray-900 mt-4 lg:w-full md:w-9/12 w-full font-bold">
                      1000
                    </p>
                    <h3 class="text-sm text-grey">Total Supply</h3>
                  </li>
                  <li className="pl-4 pr-4">
                    <p class="text-base leading-6 dark:text-gray-600 text-gray-900 mt-4 lg:w-full md:w-9/12 w-full font-bold">
                      2000
                    </p>
                    <h3 class="text-sm text-grey">Total Minted</h3>
                  </li>
                  <li className="pl-4 pr-4">
                    <p class="text-base leading-6 dark:text-gray-600 text-gray-900 mt-4 lg:w-full md:w-9/12 w-full font-bold">
                      10FTM
                    </p>
                    <h3 class="text-sm text-grey">Mint Price</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4 p-16">
              <main>
                <ul className="grid grid-cols-4 gap-6">
                  {nfts.map((nft) => (
                    <div
                      key={nft}
                      className="bg-gray-100 p-4 h-24 lg:h-28 flex justify-center items-center text-lg">
                      <img
                        src={
                          "http://placehold.jp/3d4070/ffffff/150x150.png?text=" +
                          nft
                        }
                      />
                    </div>
                  ))}
                </ul>

                {/* <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">MINT</button> */}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
