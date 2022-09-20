import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]= useState(null)
    const [isLoadind,setIsLoading] = useState(true)
    const [error,setError] = useState(null);
    

    
    useEffect(()=>{
        fetch("http://localhost:3000/blogss")
        .then(res=>{
            if(!res.ok){
                throw Error("couldnot connect to resources")
            }
            return res.json()
        })
        .then(data=>{setBlogs(data);
                    setIsLoading(false);})
        .catch(err=>{
            setIsLoading(false);
            setError(err.message);

        })            
    }, [])
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoadind && <div>Loading...</div> }
            {blogs && <BlogList  blogs={blogs} title="All blogs" />}
      </div>
    );
  }
   
  export default Home;