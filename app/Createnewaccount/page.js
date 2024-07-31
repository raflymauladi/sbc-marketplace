import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen bg-[#87CEEB]">
      <p className="text-2xl font-black mb-4 pt"> Create New Account</p>
      <p className="text-1X1 font-black mb-4 pt"> Already Registered?Login</p>

      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              NAME
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              EMAIL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray- 700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              DATE OF BIRTH
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="date"
              placeholder="Select"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/home">SIGN UP</Link>
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            ></a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;Rafly Mauladi.</p>
      </div>
    </main>
  );
}
