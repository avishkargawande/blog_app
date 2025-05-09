function BlogCard({ title, name, date, content }) {
    return (
    
            <div className="m-auto w-[100%] shadow-md p-4 h-[60%] bg-white border mt-4 border-black rounded-md  ">
                <div className="text-3xl font-bold">{title}</div>
                <div><strong>Created By:</strong><em className="text-gray-400">{name}</em></div>
                <div><strong>Created At:</strong><em className="text-gray-400">{date}</em ></div>
                <hr className="border-black mt-2" />
                <div>{content}</div>
                <div className="mt-5">
                    <button className="bg-green-700 p-2 rounded-md mt-5 text-white"><i class="fa fa-thumbs-up" aria-hidden="true"></i> 0</button>
                    <button className="bg-yellow-400 rounded-md p-2 ml-5 text-white"><i class="fa fa-thumbs-down" aria-hidden="true"></i> 0</button>
                </div>
            </div>
        
    )
}
export default BlogCard;