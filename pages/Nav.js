export default function Nav(props) {



  return (
    <nav className="flex justify-between items-center bg-slate-200 h-16 shadow-lg">
      <div className="ml-10">
        <h1 className="cursor-pointer text-blue-600 font-extrabold text-2xl">
          NFT MINTER
        </h1>
      </div>
      <ul className="mr-10">
        {!props.loading ? (
          (props.wrongNetwork) ? (
            <li>
              <button
                onClick={props.switchNetwork}
                className="mr-6 bg-red-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
              >
                Switch Network
              </button>
            </li>
          ):
          props.active ? (
            <li>
              <a
                className="mr-6  p-3 pl-5 pr-5 rounded-full transition-all text-blue-600 text-center text-lg font-semibold"
                disable="true">
                20 FTM
              </a>
              <a
                className="mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
                href="">
                  {props.address.substring(0, 4) + "....." + props.address.substring(props.address.length - 4)}
              </a>
            </li>
          ) : <li>
              <button
                  onClick={props.callConnect}
                className="mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center">
                Connect
              </button>
            </li>
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
