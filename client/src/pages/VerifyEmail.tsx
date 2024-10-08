import { ClipboardEvent, KeyboardEvent, useRef, useState } from "react"

export default function VerifyEmail() {
   const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill(""))
   const inputRefs = useRef<(HTMLInputElement | null)[]>([])

   function handleInput(index: number, value: string) {
      if (!isNaN(Number(value))) {
         const newVerificationCode = [...verificationCode]
         newVerificationCode[index] = value
         setVerificationCode(newVerificationCode)

         // Focus the next input
         if (value !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus()
         }
      }
   }

   function handleKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
      if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
         inputRefs.current[index - 1]?.focus()
      }
   }

   function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
      e.preventDefault()
      const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
      const newVerificationCode = [...verificationCode]

      for (let i = 0; i < pastedData.length; i++) {
         newVerificationCode[i] = pastedData[i]
      }

      setVerificationCode(newVerificationCode)
   }

   return (
      <div className="text-center max-w-[350px] p-4">
         <h1 className="mb-8">Enter the 6-digit code sent to your email</h1>
         <div className="flex gap-2 mb-4">
            {verificationCode.map((digit, index) => (
               <input
                  key={index}
                  value={digit}
                  ref={el => inputRefs.current[index] = el}
                  onChange={(e) => handleInput(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  maxLength={1}
                  type="text"
                  className="border border-gray-600 rounded-md w-full outline-none focus:ring-1 focus:ring-gray-800 py-3 text-center"
               />
            ))}
         </div>
         <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md w-full">Verify</button>
         <p className="text-sm text-gray-800 hover:text-black hover:underline cursor-pointer mt-12 font-medium">Resend code</p>
      </div>
   )
}