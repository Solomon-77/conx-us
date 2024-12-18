import { GoHomeFill } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoBookmark } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";

export default function SideNav() {
   const nav = "flex items-center py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer"

   return (
      <div className="">
         <ul className="space-y-3">
            <li className={nav}>
               <GoHomeFill className="text-2xl mr-3" />
               <h1 className="font-medium">Home</h1>
            </li>
            <li className={nav}>
               <FaPeopleGroup className="text-2xl mr-3" />
               <h1 className="font-medium">Guild</h1>
            </li>
            <li className={nav}>
               <FaRankingStar className="text-2xl mr-3" />
               <h1 className="font-medium">Rank</h1>
            </li>
            <li className={nav}>
               <IoBookmark className="text-2xl mr-3" />
               <h1 className="font-medium">Bookmarks</h1>
            </li>
            <li className={nav}>
               <AiFillQuestionCircle className="text-2xl mr-3" />
               <h1 className="font-medium">Ask</h1>
            </li>
            <li className={nav}>
               <FaBagShopping className="text-2xl mr-3" />
               <h1 className="font-medium">Shop</h1>
            </li>
            <li className="border-b border-gray-200" />
            <li className={nav}>
               <IoMdSettings className="text-2xl mr-3" />
               <h1 className="font-medium">Settings</h1>
            </li>
         </ul>
      </div>
   )
}