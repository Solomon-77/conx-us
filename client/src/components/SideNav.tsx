import { GoHome } from "react-icons/go";

export default function SideNav() {
   return (
      <div className="mt-4">
         <ul className="space-y-2">
            <li className="flex items-center py-2 px-2 bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Home
            </li>
            <li className="flex items-center py-2 px-2 bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Guild
            </li>
            <li className="flex items-center py-2 px-2 bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Community
            </li>
            <li className="flex items-center py-2 px-2 bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Forums
            </li>
            <li className="flex items-center py-2 px-2 bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Forums
            </li>
            <li className="flex items-center py-2 px-2 bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Forums
            </li>
         </ul>
      </div>
   )
}