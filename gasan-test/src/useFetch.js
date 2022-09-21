import {useState, useEffect} from "react";

const useFetch = (url)=> {
    const [data, setData]= useState(null);
    const [isLoadind,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
    fetch(url)
    .then(res=>{
        if(!res.ok){
            throw Error("couldnot connect to resources")
        }
        return res.json()
    })
    .then(data=>{setData(data);
                setIsLoading(false);})
    .catch(err=>{
            setIsLoading(false);
            setError(err.message);
    })  
              
}, [url]);
return{
    data,isLoadind,error
}
}

export default useFetch