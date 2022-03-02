import React from 'react'

function Nav() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 h-16 shadow-lg">
            <div className="logo">
              <h1 className="ml-5 cursor-pointer text-white">NFT MINTER</h1>
            </div>
            <ul>
              <li>
                <a
                  className="mr-6  p-3 pl-5 pr-5 rounded-full transition-all text-white text-center"
                  href="">
                  My NFT's
                </a>
                <a
                  className="mr-6 bg-blue-500 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-700 text-white text-center"
                  href="">
                  Connect
                </a>
              </li>
            </ul>
          </nav>
  )
}

export default Nav