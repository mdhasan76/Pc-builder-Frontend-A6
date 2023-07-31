import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const session = useSession();
  console.log(session);
  const user = null;
  return (
    <div className="navbar p-6 bg-[#1a4e7b] text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-black">
              <Link href="/featured/processor">Processor</Link>
            </li>
            <li className="text-black">
              <Link href="/featured/motherboard">Motherboard</Link>
            </li>
            <li className="text-black">
              <Link href="/featured/ram">RAM</Link>
            </li>
            <li className="text-black">
              <Link href="/featured/power-supply">Power Supply Unit</Link>
            </li>
            <li className="text-black">
              <Link href="/featured/ssd">Storage Device</Link>
            </li>
            <li className="text-black">
              <Link href="/featured/monitor">Monitor</Link>
            </li>
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl texh-white">PC Shop</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/featured/category">Category</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Product</summary>
              <ul className="p-2">
                <li className="text-black">
                  <Link href="/featured/Processor">Processor</Link>
                </li>
                <li className="text-black">
                  <Link href="/featured/Motherboard">Motherboard</Link>
                </li>
                <li className="text-black">
                  <Link href="/featured/RAM">RAM</Link>
                </li>
                <li className="text-black">
                  <Link href="/featured/Power Supply">Power Supply Unit</Link>
                </li>
                <li className="text-black">
                  <Link href="/featured/SSD">Storage Device</Link>
                </li>
                <li className="text-black">
                  <Link href="/featured/Monitor">Monitor</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            {session.status === "authenticated" ? (
              <button onClick={() => signOut()}>Logout</button>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/pc-builder"} className="btn btn-neutral">
          PC Builder
        </Link>
      </div>
    </div>
  );
};

export default Nav;
