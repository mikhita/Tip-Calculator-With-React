const BlogList = ({blogs}) => {
    return ( 
        <div className="home">
        {blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
        ))}
      </div>
     );
}
 
export default BlogList;