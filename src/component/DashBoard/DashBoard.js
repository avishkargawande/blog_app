import { Navigate, useNavigate } from "react-router-dom";

import BlogCard from "../BlogCard/BlogCard";
function DashBoard() {
    
     
    const Navigate= useNavigate()
    function handleClikLogin(){
        Navigate('/Login')
    }
    function handleClikRegister(){
        Navigate('/Register')
    }
    
    
    return (
        <div className="bg-gray-200 h-screen flex justify-center">

            <div className="p-7 w-[60%] bg-white mt-5 h-[30%]">
                <div className="text-4xl font-bold">Blogs !</div>
                <div className="mt-2">Publish your passion,your way...</div>
                <hr className="border-black" />
                
                <div className="flex justify-end mt-5 gap-5">
                    <button onClick={ handleClikLogin } className="bg-blue-800 p-1 w-[10%] text-[white] rounded-md ">Login</button>
                    <button onClick={ handleClikRegister } className="bg-blue-800 p-1 w-[10%] text-[white] rounded-md">Register</button>
                </div>
            </div>

        </div>
    )
}
export default DashBoard;