import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
function BlogsList() {
    const Navigate= useNavigate()
    function handleclickBlog(){
        Navigate('/Blog')
    }

    const [oneBlogCard,setOneBlogCard]=useState([]);
    useEffect(() =>{
        getBlogCard();
    },[])

    function getBlogCard(){
        axios.get("http://localhost:4200/oneBlogCard").then(function(response){
            console.log(response);
            if(response.status ==200){
                setOneBlogCard(response.data)
            }else{
                console.log('response:',response);
            }
            
        })
    }
    console.log(oneBlogCard);
    
    return (
        
        <div className="bg-gray-300 min-h-screen ">
            <div className="flex justify-between m-auto w-[80%] pt-7">
          
                <div className="text-3xl font-bold">Blogs</div>
                <button onClick={ handleclickBlog } className="bg-blue-800 p-2 text-[white] rounded-md"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create New Post</button>
            </div>
            <div className="m-auto w-[80%] pt-7">
                <div className="mb-1">Publish your passion,your way...</div>
                <hr className="border-black mt-1" />
                 {oneBlogCard.map(blogCard => (
                    <BlogCard title={blogCard.title} name={blogCard.name} date={blogCard.date} content={blogCard.content}/>
                ))}
            </div>
        </div>
    );
}
export default BlogsList;