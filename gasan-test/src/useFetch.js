import {useState, useEffect} from "react";

const useFetch = (url)=> {
    const [data, setData]= useState(null);
    const [isLoadind,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
    fetch(url, {signal:abortCont.signal})
    .then(res=>{
        if(!res.ok){
            throw Error("couldnot connect to resources")
        }
        return res.json()
    })
    .then(data=>{setData(data);
                setIsLoading(false);})
    .catch(err=>{
        if(err.name==="AbortError"){
            console.log("abort error")
        }else{
            setIsLoading(false);
            setError(err.message);
        }
    })  
    return abortCont.abort();          
}, [url]);
return{
    data,isLoadind,error
}
}

export default useFetch