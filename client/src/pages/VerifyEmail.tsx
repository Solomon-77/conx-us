import { useState } from "react"

export default function VerifyEmail() {

   const [code, setCode] = useState<string[]>(["", "", "", "", "", ""])

   const updateCodeDigit = (index: number, value: string): void => {
      if (isNaN(Number(value))) return
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
   }

   return (
      <div className="text-center max-w-[350px] p-4">
         <h1 className="mb-8">Enter the 6-digit code sent to your email</h1>
         <div className="flex gap-2 justify-center mb-4">
            {code.map((digit, index) => (
               <input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateCodeDigit(index, e.target.value)}
                  value={digit}
                  key={index}
                  maxLength={1}
                  type="text"
                  className="w-full border border-gray-600 rounded-md text-center py-3 outline-none focus:ring-1 focus:ring-gray-800"
               />
            ))}
         </div>
         <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md w-full">Verify</button>
         <p className="text-sm text-gray-800 hover:text-black hover:underline cursor-pointer mt-12 font-medium">Resend code</p>
      </div>
   )
}