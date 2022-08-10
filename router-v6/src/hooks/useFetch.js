import  { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [data, setData]= useState([]);
    const [error, setError]= useState("");
    const [loading, setLoanding] = useState(false);
    
    useEffect(() =>{

        setLoanding(true);
        fetch (url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(e => setError("Error de servidor"))
        .finally (() => setLoanding(false));

    },[url]);

  return {data, error, loading};
};
