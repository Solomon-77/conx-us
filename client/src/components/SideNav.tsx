import { GoHome } from "react-icons/go";

export default function SideNav() {
   return (
      <div className="mt-6">
         <ul className="space-y-2">
            <li className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-lg">
               <GoHome className="text-2xl mr-3" />
               Home
            </li>
         </ul>
      </div>
   )
}