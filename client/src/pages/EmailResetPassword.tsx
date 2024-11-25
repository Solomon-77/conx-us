import { Link } from "react-router-dom";

interface EmailResetPasswordProps {
    textInput: string;
}

export default function EmailResetPassword({ textInput }: EmailResetPasswordProps) {
    return (
        <div className="text-center max-w-[350px] p-4">
            <h1 className="mb-8 text-center">The code will be sent to your email</h1>
            <input
                className={textInput}
                type="text"
                placeholder="Email"
            />
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md w-full mt-4 mb-12">Reset Password</button>
            <Link to="/login" className="text-sm text-gray-800 hover:text-black hover:underline cursor-pointer font-medium">Back</Link>
        </div>
    )
}