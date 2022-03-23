import React from "react";
import Nav from "../Nav";
import { Footer } from "../Footer";

function Bulls() {
  return (
    <div className="pt-0 min-h-screen bg-slate-200">
      <div className="min-h-screen">
        <Nav />
        <div class="px-6 py-20">
          <section>
            <div class="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
              <div class="relative h-full w-full">
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
              </div>
              <div class="relative h-full w-full">
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
              </div>
              <div class="relative h-full w-full">
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
              </div>
              <div class="relative h-full w-full">
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
              </div>
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
