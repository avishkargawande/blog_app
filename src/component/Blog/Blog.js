import axios from "axios";
import { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

function Blog() {
   const navigate = useNavigate()
    useEffect(() => {
    }, []
    );
    const [blogData, setBlogData] = useState({
        title: "",
        name: localStorage.getItem ("userData"),
        content: "",
        date: new Date().toISOString().split('T')[0]
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({
            ...blogData,
            [name]: value,
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault ();
        postBlogData();

        navigate("/BlogsList")
    }
    const postBlogData =() => {
        axios.post("http://localhost:4200/oneBlogCard" ,blogData)
        .then(Response =>{
            console.log(Response.data);      
        })
        .catch(err =>{
            console.error(err);
            
        })
    }


    return (
        <form className="m-auto w-[80%] mt-10 border-2 p-5 h-[60%]" onSubmit={handleSubmit}>
            <input  className="w-[100%] outline-none text-3xl" type="text" name="title" value={blogData.title} onChange={handleChange} placeholder="Title"/>
            <hr className="border-black mt-6" />
            <div>

                <textarea className="mt-2 border-2 rounded-md" rows={7} cols={130} placeholder="Description" name="content" value={blogData.content} onChange={handleChange}> </textarea>

            </div>

            <div className="flex justify-end gap-3">
                <button className="bg-blue-900 text-white p-2 mt-3 font-bold rounded-md" onClick={()=>navigate(-1)}>Cancel</button>
                <button className="bg-blue-900 text-white p-2 mt-3 font-bold rounded-md">Save</button>
            </div>
        </form>
    )
}
export default Blog;
