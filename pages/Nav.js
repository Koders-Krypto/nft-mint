export default function Nav(props) {
  if (props.display) {
    return (
      <nav className="fixed flex justify-between items-center bg-transparent h-20  w-full z-10">
        <div className="ml-5 md:ml-10">
          <a href="/">
            <h1 className="cursor-pointer text-yellow-600 font-extrabold text-xl md:text-3xl uppercase">
              Fantom Bulls
            </h1>
          </a>
        </div>
        <ul className="mr-5 md:mr-10 flex flex-row">
          <li>
            <a href="/Bulls">
              <button
                onClick={props.switchNetwork}
                className="mr-0 md:mr-6 p-1 md:p-3 pl-5 md:pl-10 pr-5 md:pr-10 text-xs md:text-lg rounded-full transition-all uppercase font-bold text-yellow-600 text-center hover:bg-white hover:text-blue-900 focus:outline-none">
                MY BULLS
              </button>
            </a>
          </li>
          {!props.loading ? (
            props.wrongNetwork ? (
              <li>
                <button
                  onClick={props.switchNetwork}
                  className="mr-0 md:mr-6 bg-red-600 p-1 md:p-3 pl-5 md:pl-10 pr-5 md:pr-10 rounded-full transition-all hover:bg-yellow-500 text-white text-center">
                  Switch Network
                </button>
              </li>
            ) : props.active ? (
              <li>
                <button
                  className="mr-0 md:mr-6 bg-yellow-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-yellow-500 text-white text-center" disabled>
                  {props.address.substring(0, 4) +
                    "....." +
                    props.address.substring(props.address.length - 4)}
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={props.callConnect}
                  className="mr-0 md:mr-6 bg-yellow-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-yellow-500 text-white text-center">
                  Connect
                </button>
              </li>
            )
          ) : (
            <li>
              <button
                className="mr-0 md:mr-6 bg-yellow-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-yellow-500 text-white text-center"
                disabled>
                Loading...
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  } else {
    return (
      <nav className="fixed flex justify-between items-center bg-transparent h-20  w-full z-10">
        <div className="ml-5 md:ml-10">
          <a href="/">
            <h1 className="cursor-pointer text-yellow-600 font-extrabold text-xl md:text-3xl uppercase">
              Fantom Bulls
            </h1>
          </a>
        </div>
      </nav>
    );
  }
}
