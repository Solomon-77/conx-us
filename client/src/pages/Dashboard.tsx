import { CiSearch } from "react-icons/ci";
import SideNav from "../components/SideNav";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquare } from "react-icons/lu";
import { BiSolidSend } from "react-icons/bi";
import CodeSyntax from "../components/CodeSyntax";
import Messages from "../components/Messages";

export default function Dashboard() {
   return (
      <>
         <Messages />
         <nav className="w-full border-b border-gray-200">
            <div className="h-[60px] max-w-[1270px] mx-auto grid grid-cols-[250px_1fr_300px] items-center px-6 gap-8">
               <div className="text-xl font-bold">&lt;ConXus /&gt;</div>
               <div className="relative flex items-center">
                  <CiSearch className="absolute ml-3 text-gray-400" />
                  <input
                     className="py-2 pl-9 rounded-md outline-none focus:ring-1 focus:ring-gray-600 border border-gray-200 text-sm w-[250px]"
                     placeholder="Search"
                     type="text"
                  />
               </div>
               <ul className="flex items-center justify-end space-x-5">
                  <LuMessageSquare className="text-2xl" />
                  <IoMdNotificationsOutline className="text-2xl" />
                  <li>Profile</li>
               </ul>
            </div>
         </nav>
         <main className="">
            <div className="h-[calc(100vh-61px)] max-w-[1270px] mx-auto grid grid-cols-[250px_1fr_300px] p-6 gap-8">
               <SideNav />
               <div className="min-w-0 mb-6">
                  <div className="bg-white border border-gray-200 shadow-md rounded-lg">
                     <textarea
                        className="w-full p-4 rounded-t-lg outline-none"
                        placeholder="New Post"
                     />
                     <div className="bg-gray-200 rounded-b-lg flex justify-end">
                        <BiSolidSend className="text-xl mx-2 my-2" />
                     </div>
                  </div>
                  <div className="flex py-[22px] space-x-4">
                     <div>Following</div>
                     <div>Guild</div>
                     <div>Community</div>
                  </div>
                  <div className="p-4 rounded-lg border max-w-full border-gray-200">
                     <div className="flex justify-between items-center">
                        <div className="flex items-center">
                           <div className="w-10 h-10 bg-black rounded-full"></div>
                           <div className="ml-2">
                              <h1 className="font-bold">John</h1>
                              <p className="text-sm font-medium text-gray-500">2 hours ago</p>
                           </div>
                        </div>
                        <button>. . .</button>
                     </div>
                     <div className="mt-6">
                        <h1 className="mb-4">Typescript useful advanced types</h1>
                        <p>As the title says, here are all the useful types that I'm using every day or create new types on top of them. I thought it might be handy for some people so I just share here and this will be updated moving forward:</p>
                        <CodeSyntax />
                     </div>
                  </div>
               </div>
               <div className="">
                  <div>
                     <h1 className="text-lg font-bold">Trending</h1>
                  </div>
               </div>
            </div>
         </main>
      </>
   )
}