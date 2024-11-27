import { CiSearch } from "react-icons/ci";
import SideNav from "../components/SideNav";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidSend } from "react-icons/bi";
import CodeSyntax from "../components/CodeSyntax";
import Messages from "../components/Messages";
import { IoIosMore } from "react-icons/io";

export default function Dashboard() {
   return (
      <>
         <Messages />
         <nav className="fixed bg-white w-full border-b border-gray-200">
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
                  <IoMdNotificationsOutline className="text-2xl" />
                  <li>Profile</li>
               </ul>
            </div>
         </nav>
         <main className="pt-[61px]">
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
                     <div>Feed</div>
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
                        <IoIosMore className="text-xl cursor-pointer" />
                     </div>
                     <div className="mt-6">
                        <h1 className="mb-4">Typescript useful advanced types</h1>
                        <p>As the title says, here are all the useful types that I'm using every day or create new types on top of them. I thought it might be handy for some people so I just share here and this will be updated moving forward:</p>
                        <CodeSyntax />
                     </div>
                     <div className="flex justify-between items-center mt-4">
                        <div className="flex space-x-4">
                           <h1>Reactions</h1>
                           <h1>Comments</h1>
                        </div>
                        <h1>bookmark</h1>
                     </div>
                  </div>z
               </div>
               <div className="">
                  <h1 className="text-lg font-bold mb-4">Trending</h1>
                  <ul className="flex justify-between items-center">
                     <div>
                        <li className="font-bold">#iShowSpeed</li>
                        <li className="text-sm text-gray-500 font-medium mb-2">60.5k posts</li>
                     </div>
                     <IoIosMore className="text-md cursor-pointer" />
                  </ul>
                  <ul className="flex justify-between items-center">
                     <div>
                        <li className="font-bold">#Iran</li>
                        <li className="text-sm text-gray-500 font-medium mb-2">40.5k posts</li>
                     </div>
                     <IoIosMore className="text-md cursor-pointer" />
                  </ul>
                  <ul className="flex justify-between items-center">
                     <div>
                        <li className="font-bold">#Avalanche</li>
                        <li className="text-sm text-gray-500 font-medium mb-2">32.4k posts</li>
                     </div>
                     <IoIosMore className="text-md cursor-pointer" />
                  </ul>
               </div>
            </div>
         </main>
      </>
   )
}