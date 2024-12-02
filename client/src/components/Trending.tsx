import { IoIosMore } from "react-icons/io";

const Trending = () => {
   return (
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
   )
}

export default Trending