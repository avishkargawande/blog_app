import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
    const [loginData, setLoginData] = useState({
        emailId: "",
        password: "", 
    })
    const Navigate = useNavigate()
    function handleNext() {
        axios.get('http://localhost:4200/formData').then((response) => {
            const user = response.data.find((userData) => userData.EmailId === loginData.emailId && userData.password === loginData.password)
            console.log("user", user);
            console.log("loginData", loginData);

            if (user) {
                localStorage.setItem("user", JSON.stringify(user))
                // console.log('name', user.name);
                Navigate('/BlogsList')
            } else {
                alert("invaliduuuu")
            }
            console.log(response.data);
        }).catch(err => {
            console.log(err);

        });

    }
    return (
        <div>
            <div className="bg-gray-300 h-screen flex justify-center">
                <div className="p-4 w-[30%]  mt-5 h-[70%]  bg-gray-200">
                    <div className="text-4xl font-bold">Blogs </div>
                    <div className="mt-2">Publish your passion,your way...</div>
                    <hr className="border-black mt-1" />
                    <div className="text-center mt-5 text-3xl font-bold  text-blue-900">Login</div>
                    <div>Email id</div>
                    <input className="w-[100%] bg-white p-1 rounded-md " type="text" placeholder="test@123gmail.com" onChange={(event) => setLoginData({ ...loginData, emailId: event.target.value })} />
                    <div className="mt-5">Password</div>
                    <input className="w-[100%] bg-white p-1 rounded-md" type="text" placeholder="Test@123" onChange={(event) => setLoginData({ ...loginData, password: event.target.value })} />
                    <button onClick={handleNext} className="bg-blue-800 w-[100%] mt-10 rounded-md text-white p-1 font-bold">Login</button>
                </div>

            </div>
        </div>
    )
}
export default Login;