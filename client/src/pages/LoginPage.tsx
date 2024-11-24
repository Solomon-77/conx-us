import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface LoginProps {
   textInput: string;
}

export default function Login({ textInput }: LoginProps) {

   const auth = "flex hover:bg-gray-100 cursor-pointer items-center justify-center gap-3 py-3 border border-gray-400 rounded-md"

   return (
      <div className="space-y-4 max-w-[350px] p-4">
         <h1 className="mb-4 text-center">Login to your account</h1>
         <input
            className={textInput}
            type="email"
            placeholder="Email"
         />
         <input
            className={textInput}
            type="password"
            placeholder="Password"
         />
         <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md w-full">Login</button>
         <div className="flex items-center">
            <div className="h-[1px] bg-gray-300 w-full" />
            <p className="mx-4 text-sm">OR</p>
            <div className="h-[1px] bg-gray-300 w-full" />
         </div>
         <div className="grid sm:grid-cols-2 gap-4">
            <div className={auth}>
               <FcGoogle className="text-xl" />
               Google
            </div>
            <div className={auth}>
               <FaGithub className="text-xl" />
               Github
            </div>
         </div>
         <div className="flex gap-2 justify-center text-sm pt-8">
            <Link to="/signup" className="font-medium hover:underline text-gray-800 hover:text-black cursor-pointer">Sign Up</Link>
            <p className=" text-gray-600">or</p>
            <Link to="/reset-password" className="font-medium hover:underline text-gray-800 hover:text-black cursor-pointer">Reset Password</Link>
         </div>
      </div>
   )
}