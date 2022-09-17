const handleClick = () =>{
    console.log("I was clicked");
}
const handleClickAgain = (name)=>{
    console.log("Hello " + name )
}

const Home = () => {
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>handleClickAgain("Mikhita")}>click me again</button>
      </div>
    );
  }
   
  export default Home;