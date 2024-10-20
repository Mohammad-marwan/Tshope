import axios from "axios";
import { useState,useEffect } from "react";



export default function useFetchData(url){
    const [data ,setData] = useState(null);
    const [error , setErorr] = useState(null);
    const [loading , setLoading] = useState(true);
    const fetchData = async ()=>{
        try{
            const {data } = await axios.get(url);
            setData(data);
        }catch(error){
            setErorr(error);

        }finally{
            setLoading(false);
        };
       
    }
    useEffect(()=>{
        fetchData()
    },[url]);
    return {data, error, loading};

}