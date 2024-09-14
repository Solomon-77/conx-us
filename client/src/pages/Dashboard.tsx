import { CiSearch } from "react-icons/ci";
import SideNav from "../components/SideNav";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";

export default function Dashboard() {
   return (
      <div>
         <nav className="w-full border-b border-gray-300">
            <div className="h-[60px] max-w-[1366px] mx-auto grid grid-cols-[250px_1fr_300px] items-center px-4 gap-4">
               <div className="text-xl font-bold">&lt;ConXus /&gt;</div>
               <div className="relative flex items-center">
                  <CiSearch className="absolute ml-3 text-gray-400" />
                  <input
                     className="py-2 pl-9 rounded-md outline-none focus:ring-1 focus:ring-gray-600 border border-gray-300 text-sm w-[250px]"
                     placeholder="Search"
                     type="text"
                  />
               </div>
               <ul className="flex items-center justify-end space-x-3">
                  <LuMessageSquare className="text-2xl" />
                  <IoMdNotificationsOutline className="text-2xl" />
                  <li>Profile</li>
               </ul>
            </div>
         </nav>
         <main className="">
            <div className="h-[calc(100vh-61px)] max-w-[1366px] mx-auto grid grid-cols-[250px_1fr_300px] gap-4 px-4">
               <SideNav />
               <div className="pt-4">
                  <div className="bg-white border border-gray-300 shadow-md rounded-lg p-4">
                     <textarea
                        className="w-full p-4 border border-gray-300 rounded-lg"
                        placeholder="What's on your mind?"
                     />
                     <div>
                        <button className="bg-gray-800 mt-2 text-white text-sm font-semibold py-2 px-4 rounded-md">Post</button>
                     </div>
                  </div>
               </div>
               <div className="mt-4">
                  <div>
                     <h1 className="text-lg font-bold">Trending</h1>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}