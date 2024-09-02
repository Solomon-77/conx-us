import { Outlet } from "react-router-dom";

export default function Landing() {
   return (
      <div className="grid place-items-center">
         <h1 className="text-3xl font-extrabold mt-[100px] mb-[30px]">&lt;ConXus /&gt;</h1>
         <Outlet />
      </div>
   )
}