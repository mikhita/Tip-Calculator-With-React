import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]= useState([
        {title:"my new website" , body:"lorem ipsum...", author:"mikhita", id:1},
        {title:"something1" , body:"lorem ipsum...", author:"oto", id:2},
        {title:"somethiing2" , body:"lorem ipsum...", author:"nika", id:3}
    ])
    return (
        <div>
      <BlogList blogs={blogs}/>
      <BlogList blogs={blogs}/>
      </div>
    );
  }
   
  export default Home;