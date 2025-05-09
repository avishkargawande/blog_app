import { Navigate, useNavigate } from "react-router-dom";
function Header(){
    const Navigate= useNavigate()
    function handleClikLogin(){
        Navigate('/Login')
    }
    function handleClikRegister(){
        Navigate('/Register')
    }
    function handleClikHome(){
        Navigate('/')
    }
    return(
        // <div>
            <div className="bg-blue-900 flex justify-between p-2">
                <div onClick={ handleClikHome } className="text-3xl text-[white] font-bold hover:cursor-pointer">Blogs</div>
                <div>
                <label onClick={ handleClikLogin }  className=" text-[white] mr-7 font-bold hover:cursor-pointer " >Login</label>
                <label onClick={ handleClikRegister } className="text-[white] mr-4 font-bold hover:cursor-pointer">Register</label>
                </div>
            </div>
        // </div>
    )
}
export default Header;