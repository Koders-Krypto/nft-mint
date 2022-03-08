import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

export const Footer = () => {
  return (

<div className="max-w-4xl mx-auto bg-slate-200 mt-20">

	<footer className="p-2 bg-slate-200 rounded-lg md:px-10 md:py-0">
		<div className="flex items-center justify-center">
			
			<ul className="flex flex-wrap items-center mb-0 md:mb-2">
				<li>
					<a href="#" className="mr-4 text-md text-blue-600 hover:underline md:mr-6 "><i className="fa-brands fa-discord"></i> Discord</a>
				</li>
				<li>
					<a href="#" className="mr-4 text-md text-blue-600 hover:underline md:mr-6 "><i className="fa-brands fa-twitter"></i> Twitter
						</a>
				</li>
				<li>
					<a href="#"
						className="mr-4 text-md text-blue-600 hover:underline md:mr-6 "><i className="fa-brands fa-medium"></i> Medium</a>
				</li>
				<li>
					<a href="#" className="text-md text-blue-600 hover:underline "><i className="fa-solid fa-envelope"></i> Contact</a>
				</li>
			</ul>
		</div>
		<hr className="my-8 md:my-20 sm:mx-auto border-gray-700 lg:my-8" />
		<span className="block text-sm text-gray-900 text-center mb-6">All Rights Reserved © 2022 - <a href="https://niftminter.com" target="_blank" className="hover:underline">NFT Minter</a>
    </span>
	</footer>
</div>
  )
}
