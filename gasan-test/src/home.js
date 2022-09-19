import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]= useState([
        {title:"my new website" , body:"lorem ipsum...", author:"mikhita", id:1},
        {title:"something1" , body:"lorem ipsum...", author:"oto", id:2},
        {title:"somethiing2" , body:"lorem ipsum...", author:"nika", id:3}
    ])

    function handleDelete(id){
        const newBlogs = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    }
    return (
        <div>
      <BlogList  blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
      </div>
    );
  }
   
  export default Home;