import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-slate-200 mt-10 mb-5 align-middle">
      <footer className="p-2 bg-slate-200 rounded-lg md:px-0 md:py-0">
        <span className="flex items-center justify-center text-sm text-gray-900 text-center mb-6">
          All Rights Reserved © 2022 - {" "}
          <a
            href="https://fantombulls.com"
            target="_blank"
            className="hover:underline ml-1">
             Fantom Bulls
          </a>
        </span>
      </footer>
    </div>
  );
};
