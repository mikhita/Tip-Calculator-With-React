import {useParams} from "react-router-dom"
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog,isLoading,error} = useFetch("http://localhost:3000/blogs/"+id)

    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            {error && <div>{  error  }</div>}
            {blog && <div>
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            </div>}

        </div>
     );
}
 
export default BlogDetails;