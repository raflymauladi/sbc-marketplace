import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main class="flex justify-center flex-col items-center h-screen bg-[#87CEEB]">
      <p class="text-2xl font-black mb-4 pt"> Create New Account</p>
      <p class="text-1X1 font-black mb-4 pt"> Already Registered?Login</p>

      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              NAME
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              EMAIL
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray- 700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="DATE OF BIRTH"
            >
              DATE OF BIRTH
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="date"
              placeholder="Select"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              <Link href="/home">SIGN UP</Link>
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            ></a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">&copy;Rafly Mauladi.</p>
      </div>
    </main>
  );
}
