import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
const{data:blogs,isLoadind,error} = useFetch("http://localhost:3000/blogs")
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoadind && <div>Loading...</div> }
            {blogs && <BlogList  blogs={blogs} title="All blogs" />}
      </div>
    );
  }
   
  export default Home;