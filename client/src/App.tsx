import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import Landing from "./pages/LandingPage";
import Signup from "./pages/SignupPage";
import VerifyEmail from "./pages/VerifyEmail";
import ConfirmNewPassword from "./pages/ConfirmNewPassword";
import Dashboard from "./pages/Dashboard";
import EmailResetPassword from "./pages/EmailResetPassword";

export default function App() {

   const textInput = "py-3 px-5 rounded-md w-full outline-none focus:ring-1 focus:ring-gray-800 border border-gray-600"

   return (
      <div className="font-manrope">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Landing />}>
                  <Route index element={<Navigate to="/login" replace />} />
                  <Route path="login" element={<Login textInput={textInput} />} />
                  <Route path="signup" element={<Signup textInput={textInput} />} />
                  <Route path="verify" element={<VerifyEmail />} />
                  <Route path="enter-email" element={<EmailResetPassword textInput={textInput} />} />
                  <Route path="confirm-new-password" element={<ConfirmNewPassword textInput={textInput} />} />
               </Route>
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}