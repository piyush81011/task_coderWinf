import { Link } from 'react-router-dom';

function Up() {
  return (
    <nav className="bg-white border-b border-gray-200 px-8 py-3 flex items-center justify-between w-full">
      <div className="font-extrabold text-xl text-gray-900 tracking-tight">Exclusive</div>


      <ul className="flex -none space-x-8 text-gray-700 font-medium">
        <li className="hover:text-blue-600"><Link to="/">Home</Link></li>
        <li className="hover:text-blue-600">Contact</li>
        <li className="hover:text-blue-600">About</li>
        <li className="hover:text-blue-600"><Link to="/register">Sign Up</Link></li>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border border-gray-300 rounded-full py-1.5 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
          <span className="absolute left-3 top-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </span>
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13V6a1 1 0 011-1h9a1 1 0 011 1v7" />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0l1.318 1.318 1.318-1.318a4.5 4.5 0 116.364 6.364l-7.682 7.682a1 1 0 01-1.414 0l-7.682-7.682a4.5 4.5 0 010-6.364z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}


export default Up;