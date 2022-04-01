import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  return (
    <div>
       <h1 className="cursor-pointer text-yellow-600 font-bold text-lg md:text-2xl uppercase text-center mt-6">Partners</h1>
      <div className="flex items-center justify-center mt-2">
        <a href="https://nftcalendar.io/event/fantom-bulls/" target="_blank">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fantom-bulls.appspot.com/o/nft_calendar_logo.svg?alt=media&token=bb0096f7-558b-4d6a-bb10-a09fb4362686"
            alt=""
            height={100}
            width={100}
          />
        </a>
      </div>
      <div className="flex items-center justify-center bg-slate-200 mt-10 mb-5 align-middle">
        <footer className="flex items-center justify-center p-2 bg-slate-200 rounded-lg md:px-0 md:py-0">
          <span className="text-sm text-gray-900 text-center mb-6 w-full">
            All Rights Reserved © 2022 -{" "}
            <a
              href="https://fantombulls.com"
              target="_blank"
              className="hover:underline ml-1">
              Fantom Bulls
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
