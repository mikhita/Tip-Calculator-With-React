import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]= useState(null)
    const [isLoadind,setIsLoading] = useState(true)
    

    
    useEffect(()=>{
        fetch("http://localhost:3000/blogs")
        .then(res=>{
            if(!res.ok){
                throw Error("couldnot connect to this resource")
            }
            return res.json()
        })
        .then(data=>{setBlogs(data);
                    setIsLoading(false);})
        .catch(err=>
        {console.log(err.message)})            
    }, [])
    return (
        <div className="home">
            {isLoadind && <div>Loading...</div> }
      {blogs && <BlogList  blogs={blogs} title="All blogs" />}
      </div>
    );
  }
   
  export default Home;