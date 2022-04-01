import Head from "next/head";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "../public/logo.png";
import Footer from "./Footer";

export default function Home() {
  const deadline = 'April 02 2022 12:00:00 GMT+0530';
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);


  useEffect(() => {
    initializeClock(deadline);
  });


  return (
    <div className="pt-0 min-h-screen bg-slate-200">
      <Head>
      <title>Fanton Bulls - Lauching Soon</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen bg-slate-200">
        <Nav
          display={false}
        />

        <div className="min-h-screen bg-fantom-bulls w-full bg-center bg-fixed bg-cover bg-no-repeat">
          <div className="flex flex-row mt-10 md:mt-0 min-h-screen items-center justify-center h-full px-10 md:px-20">
            <div className="flex flex-col items-left justify-left w-full">
              <h1 className="cursor-pointer text-white font-extrabold text-5xl md:text-7xl mb-5 uppercase">
                Fantom Bulls
              </h1>
              <p className="text-2xl mb-5 text-white">
                The Fantom Bulls contains of <strong>1000</strong> genesis NFT's
              </p>
              <p className="text-2xl mb-5 text-white">
                <strong>Launch Date:</strong> 02 APRIL 2022
              </p>
              <p className="text-2xl mb-5 text-white">
                <strong>Launch Time:</strong> 06:30 UTC
              </p>
              <p className="text-2xl mb-5 text-white">
                <strong>Price:</strong> 10 FTM
              </p>
              <div className="flex flex-row items-center justify-left">
                <div className="flex flex-col items-center justify-center bg-yellow-600 p-0 h-20 w-20 mr-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">{day}</div>
                  <div className="text-white text-sm uppercase">Days</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="flex flex-col items-center justify-center bg-yellow-600 p-0 h-20 w-20 mr-5 ml-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">{hour}</div>
                  <div className="text-white text-sm uppercase">HRS</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="flex flex-col items-center justify-center bg-yellow-600 p-0 h-20 w-20 mr-5 ml-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">{min}</div>
                  <div className="text-white text-sm uppercase">MIN</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="flex flex-col items-center justify-center bg-yellow-600 p-0 h-20 w-20 mr-5 ml-5 rounded-lg pl-2 pr-2">
                  <div className="text-white text-xl font-bold">{sec}</div>
                  <div className="text-white text-sm uppercase">SEC</div>
                </div>
              </div>
              
              {/* <div>
                <a className="text-white" href="/mint">
                  <button className="mt-10 p-2 pr-10 pl-10 bg-trasparent text-3xl rounded-full uppercase font-bold border-2 border-white-600 text-white mb-20 md:mb-0">
                    Mint
                  </button>
                </a>
              </div> */}
             
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
                     
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/1.png?alt=media&token=9e201249-e5af-4dab-bd47-f51dd877f54f"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          0xtofu
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Co-Founder
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
                            <i className="mdi mdi-twitter text-yellow-300 mx-auto mt-2"></i>
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
                          src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/16.png?alt=media&token=d96d6896-9b26-4da3-b5c3-94637f7b3a3f"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          0xcafu
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Co-Founder
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
                          src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/3.png?alt=media&token=175ca469-20e7-45b1-9a6d-3898a40deeb5"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Kenji
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Core Designer
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
                          src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/4.png?alt=media&token=b6a82102-ff5d-49db-8197-39051bbd2cbf"
                        />
                      </a>

                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          Ally
                        </h1>

                        <div className="text-gray-700 font-light mb-2">
                          Designer
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
                        <p className="mb-3 text-base text-yellow-300">Step 1</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Fanton Bulls
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Collection of 1000 unique genesis NFT Fantom Bulls
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-yellow-300">Step 2 (v2 Airdrop)</p>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">
                          Fantom Bulls Elite
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Fantom Bulls Elite is a group of elite Fantom Bulls holders of Fantom Bulls genesis NFTs are qualifired for the airdrop of the Fantom Bulls Elite NFTs.
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-right">
                        <p className="mb-3 text-base text-yellow-300">Step 3</p>
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

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>

                      <div className="order-1  w-5/12 px-1 py-4">
                        <p className="mb-3 text-base text-yellow-300">Step 4</p>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                          Fanton Bulls Token Airdrop
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                          Launch of 'BULL' token and aidrop to the NFT holders. 
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



  function initializeClock(endtime) {
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  }


  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    setSec(seconds);
    setMin(minutes);
    setHour(hours);
    setDay(days);
    return { total };
  }
}
