import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Register() {
  const Navigate = useNavigate()
  const [formData, setFormData] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClickLogin = (formData) => {
    console.log("formData", formData);

    axios.post('http://localhost:4200/formData', formData).then(response => {
        console.log(response);
        if (response) {
          console.log(response.data);
          localStorage.setItem("userData",response.data.name)
          Navigate('/Login')
        }
        else {
          console.log(response.status);
        }
      }).catch(err => {
        console.log(err);
      })
  };

  return (
    <div>
      <div className="bg-gray-300 h-screen flex justify-center">
        <div className="p-4   mt-5 h-[80%] w-[30%] bg-gray-200">
          <div className="text-4xl font-bold">Blogs </div>
          <div className="mt-2">Publish your passion,your way...</div>
          <hr className="border-black mt-1" />
          <div className="text-center mt-5 text-3xl font-bold  text-blue-900">Register</div>
          <div>Name</div>
          <input className="w-[100%] bg-white p-1 rounded-md" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="FirstName LastName" />
          <div className="mt-5">Email id</div>
          <input className="w-[100%] bg-white p-1 rounded-md  " type="text" name="EmailId" value={formData.EmailId} onChange={handleChange} placeholder="test@123gmail.com" />
          <div className="mt-5">Password</div>
          <input className="w-[100%] bg-white p-1 rounded-md" type="text" name="password"  value={formData.password} onChange={handleChange} placeholder="Test@123" />
          <button onClick= {()=> {handleClickLogin (formData)}} className="bg-blue-800 w-[100%] mt-10 rounded-md text-white p-1 font-bold">Register</button>
        </div>

      </div>
    </div>
  )
}
export default Register;