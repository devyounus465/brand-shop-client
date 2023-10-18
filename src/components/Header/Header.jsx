import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";

const Header = () => {
  const { user, loggOut } = useContext(AuthContext);

  const handleLogOut = () => {
    loggOut().then().catch();
  };
  return (
    <div>
      <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center text-gray-900">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
          >
            <span className="text-pink-500">Brand</span> Shop
          </a>
          <ul className="ml-auto mr-8 hidden items-center gap-6 lg:flex">
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? '"flex items-center" text-pink-500' : ""
                }
              >
                Home
              </NavLink>
            </li>
            {user ? (
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <NavLink
                  to={"/addproduct"}
                  className={({ isActive }) =>
                    isActive ? '"flex items-center" text-pink-500' : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
            ) : (
              ""
            )}
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <NavLink
                to={"/register"}
                className={({ isActive }) =>
                  isActive ? '"flex items-center" text-pink-500' : ""
                }
              >
                Register
              </NavLink>
            </li>
            <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
              <a className="flex items-center" href="#">
                Docs
              </a>
            </li>
          </ul>
          {user ? (
            <button
              onClick={handleLogOut}
              className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"
              data-ripple-light="true"
            >
              <span>Log Out</span>
            </button>
          ) : (
            <Link to={"/login"}>
              <button
                className="middle none center hidden rounded-lg bg-gradient-to-tr from-pink-500 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                type="button"
                data-ripple-light="true"
              >
                Login
              </button>
            </Link>
          )}

          <button
            className="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            data-collapse-target="sticky-navar"
          >
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
