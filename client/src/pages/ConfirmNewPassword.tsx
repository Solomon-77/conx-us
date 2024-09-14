interface NewPasswordProps {
   textInput: string
}

export default function ConfirmNewPassword({ textInput }: NewPasswordProps) {
   return (
      <div className="text-center p-4 max-w-[350px] space-y-4">
         <h1 className="mb-4">Create new password</h1>
         <input
            className={textInput}
            type="password"
            placeholder="New Password"
         />
         <input
            className={textInput}
            type="password"
            placeholder="Confirm New Password"
         />
         <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md w-full">Confirm</button>
      </div>
   )
}