import { Link } from "react-router-dom"

interface SignupProps {
   textInput: string
}

export default function Signup({ textInput }: SignupProps) {
   return (
      <div className="space-y-4 max-w-[350px] p-4">
         <h1 className="mb-4 text-center">Sign up for your account</h1>
         <input
            className={textInput}
            type="text"
            placeholder="Username"
         />
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
         <input
            className={textInput}
            type="password"
            placeholder="Confirm Password"
         />
         <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md w-full">Sign up</button>
         <div className="pt-8 text-sm text-center ">
            <Link to="/login" className="font-medium text-gray-800 hover:text-black cursor-pointer hover:underline">Already have an account? Login</Link>
         </div>
      </div>
   )
}