export default function Nav(props) {



  return (
    <nav className="flex justify-between items-center bg-slate-200 h-16 shadow-lg w-full">
      <div className="ml-5 md:ml-10">
        <h1 className="cursor-pointer text-blue-600 font-extrabold text-lg md:text-2xl uppercase">
          Fantom Bulls
        </h1>
      </div>
      <ul className="mr-10">
        {!props.loading ? (
          (props.wrongNetwork) ? (
            <li>
              <button
                onClick={props.switchNetwork}
                className="mr-3 md:mr-6 bg-red-600 p-1 md:p-3 pl-5 md:pl-10 pr-5 md:pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
              >
                Switch Network
              </button>
            </li>
          ):
          props.active ? (
            <li> 
              <a
                className="mr-0 md:mr-6 mb-4 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
                href="">
                  {props.address.substring(0, 4) + "....." + props.address.substring(props.address.length - 4)}
              </a>
            </li>
          ) : <li>
              <button
                  onClick={props.callConnect}
                className="mr-0 md:mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center">
                Connect
              </button>
            </li>
        ) : (
          <li>
            <a
              className="mr-0 md:mr-6 bg-blue-600 p-3 pl-10 pr-10 rounded-full transition-all hover:bg-blue-900 text-white text-center"
              href="">
              Loading...
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
