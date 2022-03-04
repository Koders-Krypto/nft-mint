import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { BigNumber, ethers } from "ethers";
import { phnAddress } from "../config";

import PHN from "../artifacts/contracts/PHN.sol/PlaceHolder.json";

export default function Nav() {
  const [active, setActive] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState(null);



  async function connect() {
    if (window.ethereum) {
      try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const network = await provider.getNetwork();
        setChainId(network.chainId);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const phnContract = new ethers.Contract(phnAddress, PHN.abi, signer);
        setContract(phnContract);
        setActive(true);
        setAccount(address);
        setLoading(false);
        console.log(address);
        // loadMyNfts();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      alert("no metamask wallets found!");
    }
  }

  return (
    <nav className="flex justify-between items-center bg-slate-200 h-16 shadow-lg">
      <div className="ml-10">
        <h1 className="cursor-pointer text-blue-600 font-extrabold text-2xl">
          NFT MINTER
        </h1>
      </div>
      <ul className="mr-10">
        {!loading ? (
          active ? (
            <li>
              <a
                className="mr-6  p-3 pl-5 pr-5 rounded-full transition-all text-blue-600 text-center text-lg font-semibold"
                disable="true">
                20 FTM
              </a>
              <a
                className="mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
                href="">
                {address}
              </a>
            </li>
          ) : (
            <li>
              <a
                onClick={connect()}
                className="mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
                href="">
                Connect
              </a>
            </li>
          )
        ) : (
          <li>
            <a
              className="mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
              href="">
              Loading...
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
