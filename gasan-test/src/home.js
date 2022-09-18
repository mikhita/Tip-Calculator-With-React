import { useState } from "react";

const Home = () => {
    const[blogs , setBlogs] = useState([
        {title:"my new website" , body:"lorem ipsum...", author:"mikhita", id:1},
        {title:"something1" , body:"lorem ipsum...", author:"oto", id:2},
        {title:"somethiing2" , body:"lorem ipsum...", author:"nika", id:3}

    ]);
    
    return (
      <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
            
        )

        )}
      </div>
    );
  }
   
  export default Home;